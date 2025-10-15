import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FAQ() {
    return (
        <div className="flex flex-col items-center justify-center w-full py-8 gap-8"> 
        <div className="font-semibold"> Frequently Asked Questions</div>
            <Accordion type="single" collapsible className="w-full max-w-xl">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        Our flagship product combines cutting-edge technology with sleek design. 
                        Built with premium materials, it offers unparalleled performance and reliability.
                        Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="">Is it responsive?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It works on all screen sizes.
                        Our flagship product combines cutting-edge technology with sleek design. 
                        Built with premium materials, it offers unparalleled performance and reliability.
                        Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="j">Is it customizable?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It can be customized to fit your needs.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FAQ;