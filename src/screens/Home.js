import React from 'react';
import { Container, Header, Title, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
	};
	render() {

		const menu = [
			{ name: "Biryani", likes: 20000, url: 'https://i.pinimg.com/originals/08/2d/ad/082dadfd043698bacd8ae9ef0fcfd469.jpg' },
			{ name: "Ice Cream", likes: 1500, url: 'https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/88/5e/33/885e338c-9565-0e0b-e3d1-9d950342b3b4/source/256x256bb.jpg' },
			{ name: "Cold Drink", likes: 15000, url: 'https://thalioutlet-static.myshopblocks.com/images/2018/02/contain/256x256/bea6880d1a28d7aef65fbb16ab1874aa.jpg' },
		]

		return (
			<Container>
				<Content padder>

					<Text>Hello From Home</Text>

					{menu.map((item, index) => {
						return <Card key={index} style={{ flex: 0 }}>
							<CardItem button onPress={ () => this.props.navigation.navigate('Details', { title: item.name, likes: item.likes }) }>
								<Left>
									<Thumbnail source={{ uri: item.url }} />
									<Body>
										<Text>{item.name}</Text>
										<Text>{item.likes} people likes this</Text>
									</Body>
								</Left>
								
							</CardItem>
						</Card>
					})}


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

export default Home





// onPress={ () => this.props.navigation.navigate('Details', item) }




// {menu.map((item, index) => {
// 	return <Card key={index} style={{ flex: 0 }}>
// 		<CardItem button onPress={ () => this.props.navigation.navigate('Details', { name: item.name, likes: item.likes }) }>
// 			<Left>
// 				<Thumbnail source={{ uri: item.url }} />
// 				<Body>
// 					<Text>{item.name}</Text>
// 					<Text style={{ color: '#FA8072' }}>{item.likes} people likes this</Text>
// 				</Body>
// 			</Left>
// 		</CardItem>
// 	</Card>
// })}

// import {connect} from 'react-redux'
// import {addItem, removeItem} from '../redux/actions/menus-actions'


// export default connect( mapStateToProps )( Home )
// const mapStateToProps = (store) => {
//   return {
//     menus: store.menusReducer
//   }
// }
