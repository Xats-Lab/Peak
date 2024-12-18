import { getConfig } from "@/utils/get-config"
import { getCurrentYear } from "@/utils/get-current-year"
import { getSocialLink } from "@/utils/get-social-link"

const socials = getConfig().info.social
const englishName = getConfig().info.englishName

export function Footer() {
	return (
		<footer className="z-50 mb-15.5 mt-[154px] min-w-[1440px] flex flex-col items-center gap-[15px]">
			<div className="flex items-center gap-4 text-xl">
				<a aria-label="QQ" href={getSocialLink(socials.qq, "qq")} target="_blank"><span className="i-ri-qq-fill" /></a>
				<a aria-label="BiliBili" href={getSocialLink(socials.bilibili, "bilibili")} target="_blank"><span className="i-ri-bilibili-fill" /></a>
				<a aria-label="Email" href={getSocialLink(socials.email, "email")} target="_blank"><span className="i-ri-mail-fill" /></a>
			</div>
			<div className="text-[#828282]">{`${englishName} ${getCurrentYear()}`}</div>
		</footer>
	)
}
