import { FaBook, FaPencilAlt, FaPenFancy } from 'react-icons/fa';

const Motto: React.FC = () => {
	return (
		<section className='motto'>
			<div className='motto__container'>
				<h2 className='motto__maintext'>"Nie uczymy się po to, by zapamiętać, lecz po to, by zrozumieć."</h2>
				<span className='motto__subtext'>~ Konfucjusz</span>
				<FaBook className='motto__icon motto__icon--first' fontSize={70} />
				<FaPencilAlt className='motto__icon motto__icon--second' fontSize={66} />
				<FaPenFancy className='motto__icon motto__icon--third' fontSize={54} />
				<FaBook className='motto__icon motto__icon--fourth' fontSize={62} />
			</div>
		</section>
	);
};

export default Motto;
