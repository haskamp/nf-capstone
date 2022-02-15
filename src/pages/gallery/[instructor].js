import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";

import { Card } from "@mui/material";
import CardMainContent from "/src/molecules/card-main-content";
import CardExtendedContent from "/src/molecules/card-extended-content";
import CardFooter from "/src/molecules/card-footer";

const Page = ({ dbInstructor }) => {
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach || Instructor</title>
				<meta key="description" name="description" content="content" />
			</Head>
			<h1>Instructor</h1>
			<Card>
				<CardMainContent input={dbInstructor} />
				<CardExtendedContent input={dbInstructor} />
				<CardFooter />
			</Card>
		</Layout>
	);
};

export default Page;

export const getStaticPaths = async () => {
	await dbConnect();
	try {
		const data = await Instructor.find();
		const paths = await data.map(instructor => {
			return { params: { id: instructor.id }.toString() };
		});
		console.log("paths", paths);
		return {
			paths,
			fallback: false,
		};
	} catch (err) {
		console.log(err);
	}
};

/*export const getStaticProps = async context => {
	const id = context.params.id;

	await dbConnect();
	try {
		const data = await Instructor.findbyId(id);
		return {
			props: { dbInstructor: JSON.parse(JSON.stringify(data)) },
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				cards: [],
			},
		};
	}
};*/
