class conta {
    protected agencia: number
    protected contaCorrente: number
    constructor(agencia: number, contaCorrente: number) {
        this.agencia = agencia
        this.contaCorrente = contaCorrente
    }
    protected show() {
        console.log(this.agencia, this.contaCorrente)
    }
}

class pessoaJuridica extends conta {
    protected nomeDaEmpresa: string
    protected cnpj: number

    constructor(agencia: number, contaCorrente: number, nomeDaEmpresa: string, cnpj: number) {
        super(agencia, contaCorrente)
        this.nomeDaEmpresa = nomeDaEmpresa
        this.cnpj = cnpj

    }
    show() {
        console.log(this.agencia, this.nomeDaEmpresa, this.contaCorrente, this.cnpj)
    }
}

class pessoaFisica extends conta {
    protected nomeDoCliente: string
    protected cpf: number

    constructor(agencia: number, contaCorrente: number, nomeDoCliente: string, cpf: number) {
        super(agencia, contaCorrente)
        this.nomeDoCliente = nomeDoCliente
        this.cpf = cpf

    }
    show() {
        console.log(this.agencia, this.nomeDoCliente, this.contaCorrente, this.cpf)
    }
}

