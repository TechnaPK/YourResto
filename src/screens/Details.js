import React from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Details extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Details of Item'),
		};
	}
	

	render() {

		const title = this.props.navigation.getParam("title", "My name is Umar")
		const likes = this.props.navigation.getParam("likes", 5000000000)

		return (

			<Container>
				<Content padder>
					<Text>This is the Details Page</Text>
					<Text>Item Name: {title}</Text>
					<Text>Likes: {likes}</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Details
