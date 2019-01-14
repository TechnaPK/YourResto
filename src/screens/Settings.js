import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Settings extends React.Component {
	render() {
		return (

			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Settings</Title>
					</Body>
					<Right>
					</Right>
				</Header>
				<Content padder>
					<Text>
						This is the settings page
          			</Text>
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
