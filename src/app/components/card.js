import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row"> 
                

            <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM01.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">รถยนต์ Sports</h5>
                 <p className="card-text">ราคาซื้อขาย 2,250,000～5,500,000 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM03.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">รถยนต์ Cabriolet</h5>
                 <p className="card-text">ราคาซื้อขาย 4,850,000～12,250,000 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM02.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">รถยนต์ Muscle</h5>
                 <p className="card-text">ราคาซื้อขาย 1,750,000～8,400,000 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}