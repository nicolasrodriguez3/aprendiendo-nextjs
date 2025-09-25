import { titleFont } from "@/config/fonts"

interface Props {
  title: string
  subtitle?: string
  className?: string
}


export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mb-5 ${className}`}>
      <h1 className={`${titleFont.className} text-4xl font-semibold my-10`}>
        {title}
      </h1>
      {
        subtitle && <h3 className="mb-3 text-xl text-gray-500">{subtitle}</h3>
      }
    </div>
  )
}