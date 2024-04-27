import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const AlerrCom = () => {
  return (
    <div className="">
        <div>AlerrCom</div>
        <Alert variant="destructive">
        
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
    </div>
  )
}

export default AlerrCom