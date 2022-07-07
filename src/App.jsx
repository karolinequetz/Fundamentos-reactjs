import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						autor="Karol"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus magnam unde harum nulla doloribus similique quos! Cum aliquid rerum recusandae rem quisquam voluptatibus sint, provident, quam cumque accusamus asperiores."
					/>
					<Post autor="Thiago" content="Muito legal!" />
				</main>
			</div>
		</div>
	);
}

export default App;
