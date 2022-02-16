import React from "react";
import {graphql} from 'gatsby';
import { KiteGrid, KiteGridCell, KiteCard  } from '@kite/react-kite';
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
        <KiteGrid>
            { data.allNodeCoffee.edges.map(({ node }) => (
                <KiteGridCell col={4}>
                    <KiteCard>
                        <h3>{ node.title }</h3>
                        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
                    </KiteCard>
                </KiteGridCell>
            ))}
        </KiteGrid>
    </div>
)
export default CoffeesPage