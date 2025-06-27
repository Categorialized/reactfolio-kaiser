import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						One thing I enjoyed learning about in this class is
						learning how to create things which can have varied
						outcomes. Because of that, I enjoyed both the avengers
						and the rock paper scissors project due to it's varied
						outcomes/orders. If an opportunity arises, I would
						definitely look into ways on how to make more use of
						this function.
					</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [],
		body: (
			<React.Fragment>
				<h1>
					The next topic I enjoyed was making this website itself.
					Although there were a were bumps on the road, the project
					itself was pretty fun. Making a website is a big step
					compared to making projects like the ones listed in the
					first article. Thus, doing this feels more rewarding
				</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
