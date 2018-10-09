export class User {
        public id:  string;
        public nome?:  string;
        public email: string;
        public senha: string;
        public tipoUsuario?: boolean;
        public token?: string;

        constructor() {
            this.email = '' ;
            this.senha = '';
            this.token = '';
        }
}


