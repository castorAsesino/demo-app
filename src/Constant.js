export const colors = {
	COLOR_PRIMARY: "#1771F5",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Java",
	},
	{
		id: "02",
		category: "C#",
	},
	{
		id: "03",
		category: "PHP",
	},
	{
		id: "04",
		category: "Angular",
	},
	{
		id: "05",
		category: "nodeJS",
	}
];

export const recipeList = [
	{
		id: "01",
		name: "Nucleo S.A",
		image: require("../assets/images/personal.jpg"),
		rating: "3.5",
		ingredients: ["Personal ventas", "Personal Visitas", "Personal Tracking", "Root"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#0BB3C3",
		description:
			"Soporte",
		steps: [
			"Favio Amarilla",
			"Eduardo Gomez",
			"Adolfo Salas",
			"Ivan Ortiz",
			"Susana Feltes",
			"Juan Daniel Garcia",
			"Matias Romero",
		],
	},
	{
		id: "02",
		name: "Bristol S.A",
		image: require("../assets/images/bristol.jpg"),
		rating: "2.6",
		ingredients: [
			"BristolSoft SC", "APP Movil",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FFDD00",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Favio Amarilla",
			"Adolfo Salas",
		],
	},
	{
		id: "03",
		name: "Paresa S.A",
		image: require("../assets/images/paresa.webp"),
		rating: "4.6",
		ingredients: ["psbc-frontend"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"Soporte",
		steps: [
			"Juan Daniel Garcia",
		],
	},
	{
		id: "04",
		name: "Mensajero Konecta",
		image: require("../assets/images/konecta.jpg"),
		rating: "3.6",
		ingredients: ["Backend-new-mensajero", "front-end-new-mensajero"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"Soporte",
		steps: [
			"Juan Daniel Garcia",
			"Ivan Ortiz",
			"Susana Feltes",
		],
	}
];
