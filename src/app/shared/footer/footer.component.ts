import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-footer',
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    MessageModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [
    MessageService
  ]
})
export class FooterComponent {

  emailContact: string = 'contato@tecnologiadevalor.com';

  emailUser: string = '';
  nameUser: string = '';
  currentYear: number = new Date().getFullYear();

  @ViewChild('nameModel') nameModel: any; // Obtém a referencia do model
  @ViewChild('emailModel') emailModel: any;

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {

  }

  registerEmailUser() {
    this.messageService.add({ severity: 'success', summary: 'Obrigado por se inscrever!', detail: 'A partir de agora você receberá nossas novidades no seu e-mail.', life: 3000 })

    this.emailUser = '';
    this.nameUser = '';

    // Limpar os estados de validação dos campos
    if (this.nameModel) {
      this.nameModel.reset();
    }
    if (this.emailModel) {
      this.emailModel.reset();
    }
  }

}
