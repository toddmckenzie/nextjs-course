import Head from 'next/head';


export default function layout(title, keywords, description, children) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name ="description" content={description}/>
            <meta name ="keywords" content={keywords}/>
        </Head>

    </div>
  )
}


Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'DJ music'
}