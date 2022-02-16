import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

function LandingPageView({ pageData }) {
    const newsArticles = useStaticQuery(graphql`
        query {
            allNodeNewsArticle {
                edges {
                    node {
                        body {
                            value
                        }
                        title
                    }
                }
            }
        }
    `);

    const card = {
        border:"1px solid #CCC",
        width:"33%"
    }

    const articles ={
        background:"#CCC",
        padding: 10,
        marginBottom: 50
    }

    const cards = {
        padding: 10,
        margin: 10
    }

    return (
        <div className="wrapper">
            <header>
                <Link to="/">Go back to "Home"</Link>
            </header>
            <main>

                        <h1>{pageData.title}</h1>


                <aside style={articles}>
                    <h2>Articles</h2>
                    {newsArticles.allNodeNewsArticle.edges.map(({node}) => {
                        return <>
                            <h2>{node.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: node.body.value}}></div>
                        </>
                    })}
                </aside>


                    {pageData.relationships.field_page_components.map(component => {
                        return <div style={cards}>
                                <div style={card}>
                                    <h3>{component.field_title}</h3>
                                    <div dangerouslySetInnerHTML={{__html: component.field_description.value}}></div>
                                </div>



                        </div>
                    })}
            </main>
        </div>
    )
}

export default LandingPageView