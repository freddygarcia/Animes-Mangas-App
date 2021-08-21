import React from 'react';
import { Layout } from "@ui-kitten/components";

interface ScreenProps {
    children: React.ReactNode
}

const Screen = ({ children }: ScreenProps) => {

    return (
        <Layout style={{ flex: 1 }}>
            {children}
        </Layout>
    )
}

export default Screen;