const logo = document.querySelector('#logo')
const stamp = document.querySelector('#stamp')
const bName = document.querySelector('#name')
const bAddress = document.querySelector('#address')
const bPhone = document.querySelector('#phone')
const bEmail = document.querySelector('#email')
const bWebsite = document.querySelector('#website')
const invLable = document.querySelector('#invoiceLabel')
const cName = document.querySelector('#clientName')
const cAddress = document.querySelector('#clientAddress')
const cPhone = document.querySelector('#clientPhone')
const cEmail = document.querySelector('#clientEmail')
const otherInfo = document.querySelector('#otherInfo')
const invNo = document.querySelector('#invoiceNo')
const invDate = document.querySelector('#invoiceDate')
const invGenDate = document.querySelector('#invoiceGenDate')
const invDesc = document.querySelector('#invDesc')
const footerText = document.querySelector('#footerText')
const btn = document.querySelector('#submitBtn')

btn.addEventListener('click', () => {
    console.log('btnclick')

    var props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        // onJsPDFDocCreation?: (jsPDFDoc: jsPDF) => void, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
        returnJsPDFDocObject: true,
        fileName: "Invoice 2024",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 53.33, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: bName.value,
            address: bAddress.value,
            phone: bPhone.value,
            email: bEmail.value,
            email_1: "",
            website: bWebsite.value,
        },
        contact: {
            label: invLable.value,
            name: cName.value,
            address: cAddress.value,
            phone: cPhone.value,
            email: cEmail.value,
            otherInfo: otherInfo.value,
        },
        invoice: {
            label: "Invoice #: ",
            num: invNo.value,
            invDate: `Payment Date: ${invDate.value}`,
            invGenDate: `Invoice Date: ${invGenDate.value}`,
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "#",
                    style: {
                        width: 10
                    }
                },
                {
                    title: "Title",
                    style: {
                        width: 30
                    }
                },
                {
                    title: "Description",
                    style: {
                        width: 80
                    }
                },
                { title: "Price" },
                { title: "Quantity" },
                { title: "Unit" },
                { title: "Total" }
            ],
            table: Array.from(Array(10), (item, index) => ([
                index + 1,
                "There are many variations ",
                "Lorem Ipsum is simply dummy text dummy text ",
                200.5,
                4.5,
                "m2",
                400.5
            ])),
            additionalRows: [{
                col1: 'Total:',
                col2: '145,250.50',
                col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            {
                col1: 'VAT:',
                col2: '20',
                col3: '%',
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'SubTotal:',
                col2: '116,199.90',
                col3: 'ALL',
                style: {
                    fontSize: 10 //optional, default 12
                }
            }],
            invDescLabel: "Invoice Note",
            invDesc: invDesc.value,
        },
        footer: {
            text: footerText.value,
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    pdfGenerator(props)
})

function pdfGenerator(props) {
    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log('Invoice Generated', pdfObject)
}