import Head from 'next/head'

const Article = ({title, description}) => {
  return (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <h1 className="content">Article: {title}||{process.env.NEXT_PUBLIC_ENV_REVEALED}</h1>
  </>
    
  )
}

export default Article
export async function getServerSideProps(){
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  console.log(`env user:${user}-password:${password}`)
  console.log("env user:"+user+"-password:"+password)
  return{
    props:{
      title: "atomic habits",
      description: "this an article about the books atomic habits by marukh bhudist"
    }
  }
}