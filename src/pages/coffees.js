import React from "react"
import {graphql} from 'gatsby'
export const query = graphql`
    query nodeCoffee {
        allNodeCoffee {
            edges {
                node {
                    id
                    title
                    body {
                        value
                    }
                }
            }
        }
    }
`


const CoffeesPage = ({data}) => (
    <div>
        <h1>Different types of coffee</h1>
        { data.allNodeCoffee.edges.map(({ node }) => (
            <div>
                <h3>{ node.title }</h3>
                <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
            </div>
        ))}
    </div>
)
export default CoffeesPage