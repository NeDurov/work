export default function translateKeys(key: string) {
	switch (key) {
		case "id":
			return "ID";
		case "shortName":
			return "Краткое имя";
		case "units":
			return "Ед. Изм.";
		case "name":
			return "Наименование";
	}
}
