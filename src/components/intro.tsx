import AvatarPng from "@/assets/image/avatar.png"
import IntroPng from "@/assets/image/intro.png"
import { getConfig } from "@/utils/get-config"

const { description, name, status } = getConfig().info

export function Intro() {
	return (
		<section className="w-full flex items-center justify-between">
			<div className="z-20 flex flex-col justify-center">
				<h1 className="mb-10 text-5xl text-[#26267C] font-bold">{name}</h1>
				<h2 className="mb-[30px] w-lg text-xl text-[#333333]">{status}</h2>
				<p className="mb-[83px] w-[486px] text-[#727272]">{description}</p>
				<button
					style={{
						boxShadow: "0px 2px 8px 0px #24468A4D",
					}}
					className="w-50 rounded-[29px] bg-[#266EFF] px-6 py-2 text-white"
				>
					了解我更多…
				</button>
			</div>
			<div className="relative -top-[73px]">
				<img alt="avatar" height={AvatarPng.height} src={AvatarPng.src} width={AvatarPng.width} />
				<img alt="intro" className="absolute bottom-9 left-0 w-2/5" height={IntroPng.height} src={IntroPng.src} width={IntroPng.width} />
			</div>
		</section>
	)
}
