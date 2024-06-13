import { EventWithData } from "./EventWithData";
import { HandlerInterface } from "./Handler/HandlerInterface";

export class RegisterHandlers {
  private document: Document;

  constructor(document: Document) {
    this.document = document;
  }

  public registerHandler(name: string, handler: HandlerInterface): void {
    (this.document.addEventListener as any)(name, (event: EventWithData) =>
      handler.handle(event)
    );
  }
}
