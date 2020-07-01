import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"
import SEO from "../components/seo"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('8J7JSA4FQI', 'a4e8c8613b1decfcaf3ddab36b44d864');
const Hit = ({ hit }) =>
<article>
	<Link to={`/${hit.fields.slug}`}>
		<h1>{hit.title}</h1>
		<h2>{hit.date}{" "}by{" "}<span>{hit.author}</span>{" "}</h2>
		<p>{hit.excerpt}</p>
	</Link>
</article> 

export default class extends React.Component {
	
	render() {
		return (
			<Layout>
				<PageBreadcrumb crumbs={ [ 'Home', 'Search' ] } />
				<div className="searchbarContainer">
				<SEO title="Search - Yonsei UIC Scribe | Underwood International College"></SEO>
					<InstantSearch className="searchbar" searchClient={searchClient} indexName="Posts">
						<SearchBox />
						<Hits hitComponent={Hit} />
					</InstantSearch>
				</div>
			</Layout>
		)
	}
}