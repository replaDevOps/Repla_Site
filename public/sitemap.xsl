<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Repla Technologies Sitemap</title>
        <style>
          body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
            margin: 2rem auto;
            max-width: 960px;
            padding: 0 1rem;
            color: #111;
            background: #fff;
          }
          h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
          p { color: #555; margin-top: 0; }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1.5rem;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 0.5rem 0.75rem;
            text-align: left;
            vertical-align: top;
          }
          th { background: #f5f5f5; }
          a { color: #c41e24; word-break: break-all; }
        </style>
      </head>
      <body>
        <h1>Repla Technologies Sitemap</h1>
        <p>
          <xsl:value-of select="count(//s:url)" /> URLs
        </p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last modified</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="//s:url">
              <tr>
                <td>
                  <a href="{s:loc}">
                    <xsl:value-of select="s:loc" />
                  </a>
                </td>
                <td>
                  <xsl:value-of select="s:lastmod" />
                </td>
                <td>
                  <xsl:value-of select="s:priority" />
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
