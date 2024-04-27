import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   

const AccordionCom = () => {
  return (
    <div className="">        
        <h2>AccordionCom</h2>
        <Accordion type="single" collapsible className="w-full  max-w-[500px]">
      <AccordionItem value="item-1" className="px-0">
        <AccordionTrigger className="bg-slate-500 py-1 px-2">Is it accessible?</AccordionTrigger>
        <AccordionContent className="bg-slate-200 px-2">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>       
      <AccordionItem value="item-2" >
        <AccordionTrigger className="bg-slate-300 py-1 px-2">Is it accessible?</AccordionTrigger>
        <AccordionContent className="bg-slate-200 px-2">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>       
      <AccordionItem value="item-3" >
        <AccordionTrigger className="bg-slate-200 py-1 px-2">Is it accessible?</AccordionTrigger>
        <AccordionContent className="bg-slate-200 px-2">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>       
    </Accordion>
    </div>
  )
}

export default AccordionCom