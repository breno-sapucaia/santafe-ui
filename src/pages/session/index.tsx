
import React from 'react'
import Header, { TabPanel } from '../../components/header';
import Login from '../../components/login';
import Register from '../../components/register';

interface SessionPageProps { }

function SessionPage(props: SessionPageProps) {
    const [value, setValue] = React.useState(0);
    return (
        <>
            <Header value={value} setValue={setValue} />
            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register />
            </TabPanel>
        </>
    )
}

export default SessionPage
