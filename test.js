(function () {
  "use strict";

  const http = require("http");
  const React = require("./react");
  const ReactDomServer = require("./react-dom-server-opt"); // CHANGE THIS
  const stories = require("./stories.js");
  const h = React.createElement;

  function timeAge(time) {
    const now = new Date().getTime() / 1000;
    const minutes = (now - time) / 60;

    if (minutes < 60) {
      return Math.round(minutes) + " minutes ago";
    }
    return Math.round(minutes / 60) + " hours ago";
  }

  function getHostUrl(url) {
    return (url + "")
      .replace("https://", "")
      .replace("http://", "")
      .split("/")[0];
  }

  function HeaderBar() {
    return h(
      "tr",
      {
        style: {
          backgroundColor: "#222",
        },
      },
      h(
        "table",
        {
          style: {
            padding: 4,
          },
          width: "100%",
          cellSpacing: 0,
          cellPadding: 0,
        },
        h(
          "tbody",
          null,
          h(
            "tr",
            null,
            h(
              "td",
              {
                style: {
                  width: 18,
                  paddingRight: 4,
                },
              },
              h(
                "a",
                {
                  href: "#",
                },
                h("img", {
                  src: "logo.png",
                  width: 16,
                  height: 16,
                  style: {
                    border: "1px solid #00d8ff",
                  },
                })
              )
            ),
            h(
              "td",
              {
                style: {
                  lineHeight: "12pt",
                },
                height: 10,
              },
              h(
                "span",
                {
                  className: "pagetop",
                },
                h("b", { className: "hnname" }, "React HN Benchmark"),
                h("a", { href: "#" }, "new"),
                " | ",
                h("a", { href: "#" }, "comments"),
                " | ",
                h("a", { href: "#" }, "show"),
                " | ",
                h("a", { href: "#" }, "ask"),
                " | ",
                h("a", { href: "#" }, "jobs"),
                " | ",
                h("a", { href: "#" }, "submit")
              )
            )
          )
        )
      )
    );
  }

  function Story({ story, rank }) {
    return [
      h(
        "tr",
        {
          className: "athing",
        },
        h(
          "td",
          {
            style: {
              verticalAlign: "top",
              textAlign: "right",
            },
            className: "title",
          },
          h(
            "span",
            {
              className: "rank",
            },
            `${rank}.`
          )
        ),
        h(
          "td",
          {
            className: "votelinks",
            style: {
              verticalAlign: "top",
            },
          },
          h(
            "center",
            null,
            h(
              "a",
              {
                href: "#",
              },
              h("div", {
                className: "votearrow",
                title: "upvote",
              })
            )
          )
        ),
        h(
          "td",
          {
            className: "title",
          },
          h(
            "a",
            {
              href: "#",
              className: "storylink",
            },
            story.title
          ),
          story.url
            ? h(
                "span",
                {
                  className: "sitebit comhead",
                },
                " (",
                h(
                  "a",
                  {
                    href: "#",
                  },
                  getHostUrl(story.url)
                ),
                ")"
              )
            : null
        )
      ),
      h(
        "tr",
        null,
        h("td", {
          colSpan: 2,
        }),
        h(
          "td",
          {
            className: "subtext",
          },
          h(
            "span",
            {
              className: "score",
            },
            `${story.score} points`
          ),
          " by ",
          h(
            "a",
            {
              href: "#",
              className: "hnuser",
            },
            story.by
          ),
          " ",
          h(
            "span",
            {
              className: "age",
            },
            h(
              "a",
              {
                href: "#",
              },
              timeAge(story.time)
            )
          ),
          " | ",
          h(
            "a",
            {
              href: "#",
            },
            "hide"
          ),
          " | ",
          h(
            "a",
            {
              href: "#",
            },
            `${story.descendants || 0} comments`
          )
        )
      ),
      h("tr", {
        style: {
          height: 5,
        },
        className: "spacer",
      }),
    ];
  }

  function StoryList({ stories }) {
    return h(
      "tr",
      null,
      h(
        "td",
        null,
        h(
          "table",
          {
            cellPadding: 0,
            cellSpacing: 0,
            classList: "itemlist",
          },
          h(
            "tbody",
            null,
            stories.map((story, i) =>
              h(Story, { story, rank: ++i, key: story.id })
            )
          )
        )
      )
    );
  }

  function App({ stories }) {
    return h(
      "center",
      null,
      h(
        "table",
        {
          id: "hnmain",
          border: 0,
          cellPadding: 0,
          cellSpacing: 0,
          width: "85%",
          style: {
            "background-color": "#f6f6ef",
          },
        },
        h(
          "tbody",
          null,
          h(HeaderBar, null),
          h("tr", { height: 10 }),
          h(StoryList, {
            stories,
          })
        )
      )
    );
  }

  var didError = false;
  http
    .createServer(function (req, res) {
      const stream = ReactDomServer.renderToPipeableStream(
        h(App, {
          stories: stories,
        }),
        {
          onShellReady() {
            // The content above all Suspense boundaries is ready.
            // If something errored before we started streaming, we set the error code appropriately.
            res.statusCode = didError ? 500 : 200;
            res.setHeader("Content-type", "text/html");
            res.setHeader("Cache-Control", "no-transform"); // set to match the Deno benchmark, which requires this for an apples to apples comparison
            stream.pipe(res);
          },
          onShellError(error) {
            // Something errored before we could complete the shell so we emit an alternative shell.
            res.statusCode = 500;
            res.send(
              '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
            );
          },
          onAllReady() {
            // If you don't want streaming, use this instead of onShellReady.
            // This will fire after the entire page content is ready.
            // You can use this for crawlers or static generation.
            // res.statusCode = didError ? 500 : 200;
            // res.setHeader('Content-type', 'text/html');
            // stream.pipe(res);
          },
          onError(err) {
            didError = true;
            console.error(err);
          },
        }
      );
    })
    .listen(9080);

  console.log(`Server running at http://localhost:9080/`);
})();
