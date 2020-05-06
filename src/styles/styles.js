import styled from "styled-components";
export const CountryContainer = styled.div`
	margin-top: 50px;
`;
export const CardList = styled.div`
	width: 85vw;
	margin: 0 auto;
	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1rem;
`;
export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;

	border: 1px solid grey;
	border-radius: 5px;
	padding: 25px;
	cursor: pointer;
	font-size: 100%;

	transform: translateZ(0);
	transition: transform 0.25s ease-out;
	&:hover {
		transform: scale(1.05);
	}
`;
export const Text = styled.div`
	width: 80%;
	text-align: center;
	padding: 10px;
	margin: 0 auto;
`;
export const Container = styled.div`
	max-width: 460px;
	margin: 20px auto;
	padding: 20px;
	border: 1px solid black;
	@media (max-width: 600px) {
		max-width: 340px;
	}
`;
