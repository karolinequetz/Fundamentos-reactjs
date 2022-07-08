import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/karolinequetz.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Karoline Quetz</strong>
							<time title="07 de Julho às 11:18h" dateTime="2022-07-07">
								Cerca de 1h atrás
							</time>
						</div>
						<button title="Deletar comentário">
							<Trash siz={24} />
						</button>
					</header>
					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>
				<footer>
					<button>
						<ThumbsUp />
						Aplaudir
						<span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
