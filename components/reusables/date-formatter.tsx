import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString }: {dateString: any}) {
	const date = parseISO(dateString)
	return (
		<div>
			{format(date, "LLLL	d, yyyy")}
		</div>
	);
}
