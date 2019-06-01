import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Team</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>

            <div id="main">
                <section id="one">
                    <div className="inner">
                    <header className="major">
                                    <h3>Наши Партнеры</h3>
                                </header>
                        <div style={{display: `flex`, flexWrap: 'wrap', justifyContent: `space-around`, margin: `1rem`}} id="two" className="spotlights">
                        <img style={{margin: `1rem`}} src="/static/images/client1.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client2.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client3.png" alt="" />
                        </div>
                        <div style={{display: `flex`, flexWrap: 'wrap', justifyContent: `space-around`, margin: `1rem`}} id="two" className="spotlights">
                        <img style={{margin: `1rem`}} src="/static/images/client4.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client5.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client6.png" alt="" />
                        </div>
                        <div style={{display: `flex`, flexWrap: 'wrap', justifyContent: `space-around`, margin: `1rem`}} id="two" className="spotlights">
                        <img style={{margin: `1rem`}} src="/static/images/client7.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client8.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client9.png" alt="" />
                        </div>
                        <div style={{display: `flex`, flexWrap: 'wrap', justifyContent: `space-around`, margin: `1rem`}} id="two" className="spotlights">
                        <img style={{margin: `1rem`}} src="/static/images/client10.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client11.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client12.png" alt="" />
                        </div>
                        <div style={{display: `flex`, flexWrap: 'wrap', justifyContent: `space-around`, margin: `1rem`}} id="two" className="spotlights">
                        <img style={{margin: `1rem`}} src="/static/images/client13.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client14.png" alt="" />
                        <img style={{margin: `1rem`}} src="/static/images/client15.png" alt="" />
                        </div>
                    </div>
                    </section>
            </div>
        </div>
    </Layout>
)
