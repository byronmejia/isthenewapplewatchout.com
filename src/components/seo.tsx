import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;

export interface SEOPropTypes {
    audio?: string;
    author?: string;
    description?: string;
    image?: string;
    keywords?: string[];
    lang?: string;
    // tslint:disable-next-line:no-any
    meta?: any[];
    title: string;
    video?: string;
}

// tslint:disable-next-line:no-commented-code
// tslint:disable:jsx-no-lambda
// tslint:disable:no-use-before-declare
// tslint:disable:jsx-no-multiline-js
const SEO: FunctionComponent<SEOPropTypes> = ({
    description,
    lang,
    meta,
    keywords,
    title,
    author,
    image,
    audio,
    video,
}: SEOPropTypes) => (
    <StaticQuery
        query={detailsQuery}
        render={({ site }) => {
            const metaTitle = title || site.siteMetadata.title;
            const metaDescription =
                description || site.siteMetadata.description;
            const metaAuthor = author || site.siteMetadata.author;
            const metaKeywords = keywords || site.siteMetadata.keywords;
            return (
                <Helmet
                    htmlAttributes={{
                        lang,
                    }}
                    title={metaTitle}
                    titleTemplate={`%s | ${site.siteMetadata.title}`}
                    meta={[
                        {
                            name: `description`,
                            content: metaDescription,
                        },
                        {
                            property: `og:title`,
                            content: metaTitle,
                        },
                        {
                            property: `og:description`,
                            content: metaDescription,
                        },
                        {
                            property: `og:type`,
                            content: `website`,
                        },
                        {
                            name: `twitter:card`,
                            content: `summary`,
                        },
                        {
                            name: `twitter:creator`,
                            content: metaAuthor,
                        },
                        {
                            name: `twitter:title`,
                            content: metaTitle,
                        },
                        {
                            name: `twitter:description`,
                            content: metaDescription,
                        },
                    ]
                        .concat(
                            metaKeywords.length > 0
                                ? {
                                      name: `keywords`,
                                      content: metaKeywords.join(`, `),
                                  }
                                : [],
                        )
                        .concat(
                            image
                                ? [
                                      {
                                          property: `og:image`,
                                          content: image,
                                      },
                                      {
                                          property: `og:image:width`,
                                          content: `1200`,
                                      },
                                      {
                                          property: `og:image:height`,
                                          content: `630`,
                                      },
                                  ]
                                : [],
                        )
                        .concat(
                            audio
                                ? {
                                      property: `og:audio`,
                                      content: audio,
                                  }
                                : [],
                        )
                        .concat(
                            video
                                ? {
                                      property: `og:video`,
                                      content: video,
                                  }
                                : [],
                        )
                        .concat(meta!)}
                />
            );
        }}
    />
);

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
};

export default SEO;
