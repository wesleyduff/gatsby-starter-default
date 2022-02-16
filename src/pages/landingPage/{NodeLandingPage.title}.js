import * as React from "react"
import { graphql } from "gatsby"
import LandingPageView from "../../views/landing-page-view"

function LandingPage(props) {
    const { nodeLandingPage } = props.data;
    return <LandingPageView pageData={nodeLandingPage} />
}

export default LandingPage;

export const query = graphql`
    query($id: String!) {
        nodeLandingPage(id: {eq: $id}) {
            title
            field_title
            relationships {
                field_page_components {
                    field_description {
                        value
                    }
                    field_title
                }
            }
        }
    }
`