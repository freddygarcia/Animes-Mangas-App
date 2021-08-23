import React from 'react';
import { Layout, LayoutProps } from "@ui-kitten/components";

interface ScreenProps extends LayoutProps {
    children: React.ReactNode
}

const SafeAreaLayout = (props: ScreenProps) => {

    return (
        <Layout style={[props.style, { flex: 1 }]}>
            {props.children}
        </Layout>
    )
}

export default SafeAreaLayout;