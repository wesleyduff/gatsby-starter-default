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
            relationships {
                field_page_components {
                    field_card_description
                    field_card_description_2
                    field_card_description_3
                    field_card_title
                    field_card_title_2
                    field_card_title_3
                }
            }
        }
    }
`