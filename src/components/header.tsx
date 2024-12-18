import { getConfig } from "@/utils/get-config"

const menuNames = getConfig().website.menu

const menus = [
	{
		name: menuNames.course,
		slug: "course",
	},
	{
		name: menuNames.project,
		slug: "project",
	},
	{
		name: menuNames.book,
		slug: "book",
	},
	{
		name: menuNames.paper,
		slug: "paper",
	},
	{
		name: menuNames.about,
		slug: "about",
	},
	{
		name: menuNames.contact,
		slug: "contact",
	},
]

export function Header() {
	return (
		<header className="z-50 min-w-[1440px] flex items-center p-4 pr-30">
			<nav className="flex grow justify-end gap-10">
				{
					menus.map(item => (
						<a className="text-white" href={item.slug} key={item.slug}>{item.name}</a>
					))
				}
			</nav>
		</header>
	)
}
