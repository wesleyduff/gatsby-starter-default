import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import { KiteGrid, KiteGridCell, KiteCard } from '@kite/react-kite'

function LandingPageView({ pageData }) {
    const newsArticles = useStaticQuery(graphql`
        query {
            allNodeNewsArticle {
                edges {
                    node {
                        field_title {
                            value
                        }
                        title
                        body {
                            value
                        }
                    }
                }
            }
        }
    `);

    console.log('--- articles ---')
    console.log(newsArticles)
    console.log('--- page data ---')
    console.log(pageData)
    return (
        <div className="wrapper">
            <header>
                <Link to="/">Go back to "Home"</Link>
            </header>
            <main>
                <KiteGrid>
                    <KiteGridCell col={12}>
                        <h1>{pageData.title}</h1>
                    </KiteGridCell>

                    <KiteGridCell col={12}>
                        <h2>Articles</h2>
                        {newsArticles.allNodeNewsArticle.edges.map(({node}) => {
                            return <>
                                <h2>{node.title}</h2>
                                <strong>{node.field_title.value}</strong>
                                <div dangerouslySetInnerHTML={{__html: node.body.value}}></div>
                            </>
                        })}
                    </KiteGridCell>

                    {pageData.relationships.field_page_components.map(component => {
                        return <>
                            <KiteGrid col={4}>
                                <KiteCard>
                                    <h3>{component.field_card_title}</h3>
                                    <p>{component.field_card_description}</p>
                                </KiteCard>
                            </KiteGrid>
                        </>
                    })}
                </KiteGrid>
            </main>
        </div>
    )
}

export default LandingPageView