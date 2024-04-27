import { badgeVariants } from "@/components/ui/badge"

import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export function BadgeCom() {
  return    <div className="flex gap-3 py-5">
 <Badge>Badge</Badge>
 <Badge2 />
 <Badge3 />
 <Badge4 />
  </div>
}


const Badge2 = ()=>{
    return <Badge variant="outline">Badge</Badge>

}
const Badge3 = ()=>{
    return <Link to={"/"} className={badgeVariants({variant: "outline"})} variant="outline">Badge</Link>

}

const Badge4 = ()=>{
    return <Badge variant="destructive">Badge</Badge>

}