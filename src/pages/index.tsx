import React from "react";
import { RootLayout } from "@components/RootLayout";
import { Header } from "@components/Header";
import { Paragraph } from "@components/Paragraph";
import { Trans } from "@lingui/react";
import SEO from "@components/seo";

const IndexPage = () => (
    <RootLayout>
        <SEO
            title="Is The New Apple Watch Out Yet"
            keywords={["apple", "health", "watch", "fitness", "life", "blog"]}
            description="Please, is it out yet? Apple products cures my crippling depression..."
        />
        <Trans render={Header}>Apple Watch Series 5 Status</Trans>
        <Trans render={Paragraph}>Pre Order</Trans>
    </RootLayout>
);

export default IndexPage;
