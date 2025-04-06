import { Component, inject , OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-destination-details',
  imports: [RouterLink],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.css'
})
export class DestinationDetailsComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute)  
    id !: number
   destination : any
    ngOnInit(): void {
      this.id=this.route.snapshot.params["id"]
      this.destination = this.destinations.find((e: { id: number }) => e.id == this.id);  }
    destinations:any=[
      { id : 1 ,
        image: "https://media.istockphoto.com/id/1325788917/fr/photo/une-belle-vue-sur-la-c%C3%B4te-m%C3%A9diterran%C3%A9enne-avec-de-leau-de-bouleau-une-plage-de-sable-blanc.jpg?s=612x612&w=0&k=20&c=8xz_Cjxop-ncOgJT8q8kIhsaIJWYGh2HWkxgtRZ8BwU=" ,
        desc : "Djerba est une île méditerranéenne célèbre pour ses plages idylliques et son ambiance paisible. Elle mélange harmonieusement cultures berbères, arabes et juives, offrant une expérience unique aux visiteurs." ,
        name: "DJERBA",
        location: "medenin , tunisie",
        price_range: "50DT - 150DT par jour",
        rating: 5
      },
      {
        id : 2 ,
        image :"https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2018-12/A12.jpg?itok=kwcxu1UN" ,
        desc:"Tozeur, située dans le désert du Sahara, est une oasis renommée pour ses palmeraies luxuriantes et ses paysages désertiques impressionnants. C’est un lieu idéal pour découvrir la beauté brute du désert tunisien." ,
        name: "TOZEUR",
        location: "tozeur,tunisie",
        price_range: "10DT - 40DT par jour",
        rating: 4.2
      },
      {
        id : 3 ,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvLofJke-Lngoz6neL9aZtnnWwXIQTgsA9Q&s" ,
        desc :"La Médina de Tunis est un quartier historique classé au patrimoine mondial de l'UNESCO, avec ses ruelles étroites et ses monuments antiques. Elle est un centre vibrant de l'artisanat et de la culture traditionnelle tunisienne." ,
        name: "MEDINA",
        location: "tunis, tunisie",
        price_range: "15DT - 30DT par jour",
        rating: 4.8
      },
      {
        id : 4 ,
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFRUXGBcYGBgYGBcYGBgaGB0XGRcXGB0aHyggGB4lHRcYITEhJSkrLi4uGB8zODMtNygtLi0BCgoKDg0OGhAQGy0iHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tN//AABEIALcBFAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAE0QAAECAwUFBAYECgkCBwAAAAECEQADIQQFEjFBUWFxgZEGEyKhFDKxwdHhQlJi8CMkJTNygpKisvEHFUNTY2SzwtJzdBY0NUSEk6P/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIDBAX/xAAmEQACAgEEAgIDAQEBAAAAAAAAAQIREgMhMUETUSIyFGGBcVIE/9oADAMBAAIRAxEAPwDaxyG4o5ij7VnyqJIUNBhYoiocY6Ia8J4iHQoa8J4hHNCjgMcKogHYhHYZijuKKyoe8J4jVNEcEyKxoleFiiNU0aRH3sFliTlUIKiDvIem0NsiscSYGFiiBc8k5mGYjtissS0K5Q9csgOQ0VhPU0IziczBbHFEzwsUQlYaK8y0gZmLJBgXwYTQLl3wR6qSRtLDpCN8nVHQv7ow9aPs34mE3jsD5VvSdo5ROi0gnMDbGlqRfZl6bRZjkU7RectIoSpvq1A4nIdYqqvxILYSf0SD5PB5I+w8bCpjkDkX1KL1KSMwoEERWm38Poh95hc4rslpyYajsZyZfcz6IHR/fDkW60kZpH7L9Ix54j4ZGhhRnP6znfXT0T8I5F+REvDIBrvCcc1qisu0qeqiTxgYq2rZsRblDZs6YKvvDgZR8r5ez14hKZea0/2iqfaNI4b8mj6a+ai3xgSVk1LRJJQFaRq2ipF431aP71XUxyXfFoBpNXzUfYaRH3REcEkVcKNKMWrvcQ+R+w29F2X2rtCWBVi4gP5fCL8ntZMIcg8gkj2CM1PkBx4aO+YcDmPvshSFEEuH5n35xvyyS2ZYxNdI7VA5nqlh7YsJ7ToJYs7tqOhyjIyUILuG3A8K5RyfZ1JO7Ry1OXSNL/0SHxxo2ye0aNR0I97RMjtDIVqenzjBSlt61RxryoREq7Q3qsRvA90b/KZh6UTbqv2QNS+xm9sIX5J2ny+MYpNu2ueESS7WFctoh/JkZ8aNiL6knU9PnEE6/wBAyyycxmFSwakJoHd0g8qwybLBoRB+Q2aUIo0a79OjeXxhgvhX3AgFJwBvC7bSSIsi0104YU+4CDzUVRC0u/FDMCLMq+SckjrALvknMDk4+MTIVKGSj1+UP5BpaaDIvkmmGsNN8HQDzMDUSpasj74ehBSfCzb/AJgiD8j9l4v0XVXniBBccKfOClhkpKMXrMHJdL6s/wAoATJZIL4hV/Vf95JcDdlA+fMwkglQ5r/lGJSz7H69GqvBKcDpSQRtOe7fFD0oMKh9QGHmzwCs9uIpjWR9XSm5vOC1nvNZHhnBPJXtKYy6QqVlldoLeDGXZqE8c/bEYC6BSVKfaD7hEK70mg/n1HnEZvInOcv9toMkQQmWiap090pKMLNVjq9TtimJKyfU4+NIfzEUbZbVBvFML0GIlt+dYqKtK9T7Y0pIHtyFLRKejop9ZQJHSrbsonkWyWlgtadN/kRlAizzwothPIPEtpwfXL8H8vnFmmSYbnps5rjSh9pbZthssWcB1kr/AESAPaYAzJamd0rG9LeZMRyZswZEpOhScJGxs4Mo+xNKq1WPSSvkon3xyM6Ak1WjEqrnEoPx3woM4eyBAkjhHUygMq8ovCzJ+senzhipA+t5fOONjhJFMJ3Q9MwjQRP6N9ryiWVY0HNZ6H3GKwwkVhaTsESBcw/R9sFJVjljVR4Jb2iLKLvxakDepKR5tBZrBgVKFnPCIcqRuB8o0UqxWVPrzpXDGF+xoJSrTY0J8EyWTub3AwZD417MWbMgesgjnC9FRoSOfxEHrdeEhVBMUTs8R/2wMM1L/R6CK2PjXspKsO/yEc9A3iCiO6OZTEkxFmZ+8w+flBbB6f7ApsKt0MVZFfVie0kg+AhQ2ij8jEYJAckA67BDkzDiQejfZUOEN7sj5iLJUSP5RwFUSmzNEGru3N4nxn6w6EQlTmZxDsYP0fL4RryMaF3oAck8GfTdpp7ojVaksVO4GfwrDsQ+qr7847JmAKBKSQCCQciAXIPHLnGlNBSIpNuSoOAoB2fCSOoixLtexT84M3hfirQUSpEtFnSUlBQkuFOcQDkeGoo2p3wEtF3S0Fq4tS5A9pJ40jTlGrGvRMLwmMz+UcFpV9ZXU/GIjL2E+XQloaUoW6SQWoQ/At5iOecSts56aA7KyzYA9WiaXalqoym2kEDdTOITNloBIA8LUSMnyiGVeSSpRUWRhOEEKxKIzyo2fSFyvhEkwlZ8Axd4kqywsoIAzfFQlWlHGsRLkJL+PPLN08CHg3ctnsSpYXPmLQ4BZKUgg5FJcKc5Gra0OlK95skH8XVMw1czAktVgWQAduY6QZyN4sqI3Aq3mvujqn1SIGWu0TCDgM0mjMhk73Ki4ixdlomo9exSpxzBnF6sBoQ1AesG73sMGXrRagRhcJSMkg+Z1J3xAgoPq1iCcmeVFXc2VDuwAdnDfSJy04xB6FP/ALxAPAfHfA/9HBhQA7AOMW5NhmK05mntipdJ7ovMUFHaNYK/1ug5P0jjJu9jrHS9s6m6tqq8PnChG28YUZ+R1pGZN4UYAecR+mK0ERd0YXcmPRZ48pEwtatW8oYbava0MwgfSHV4bhD/AEjvAf3xWVyY82hRzJPUxzvIeJCiKJPPZD0WRX0iBwaBtFiysVHYeMdRKJ1b77otKkvTz+EOFnG2DOgogQkCjxwtvMQWq3yZRAWVAlyPCpixILbagjlEIvuz7T+z84ak+ipl4rGyOCYctmfuEVU31ZtCSeDe+HzL4lJzChrRMWMvQ0y6Jh5xzATnl7YHm/ZT+qrjh+JhwvtBySv9n4mDCXoqYThvCB6b1H93NPJx1EON7/4UzpFhL0WLCUtDbzHanWBKr7Ygd2RXUtqB7xD5l6qBI7o0Oig3KLCY4yCrRwp3wEN9qdu6/eT99YSr4mMfwVBmQSdrJoKEsaFnY7DEoSLBhpMoAvV/v0hBLfSUf0i/tcxm1X9NI8MsDi/xixdV5rWoiYjCwcEOxqKVicWluxwlQeMz7mKc6V4sSVFBrsq/8o7iH8oWPYPKMKVcMzi/RXTYqhlK1ckGtGyxCCNlly0F8SycvoJHJg4isCTt6GIzMZTMX1OQHWphzvs0s10FAmzu/duc/ESr2mnKLkmYa93LSWzbC4fJxnUwIlGUkPMmYj9VFBzJqYkN6hIaWEoGrEOeZjSrs6rMszbZWoYwxNpTv8oFG0AlytPNTx1M6WTVY5Af8o18TW4X9KTseOekogd38lJIUZtNiUe9cFLNYitOKXJnEM4Kk6bRoRvEVJEMVaU6RGbVFxV2TUgHuFsdcNNubREqRMH9ksfqL+G8RWgZW787YUWFSp391M/+tfwhRWgszcy+UaYjybjHDeyDmlR4gn/dCFnQWGEA8ub03Q6WEpLoAT9/KLGJSqPQ0Xukf2Y/ZH/KOqv7YG/VT/yMRWyTjOIFpgyUM+B2jjFiQjFLRMYDEVJUGyWlsQ3UIPOLGJRdjP67J28mHshLvZSfEZbA5KJAfmUxYyArU56cojKiQxLg5jPrBUQlKnRGb7mN6hD/AGgOngizeF6zkhLICHTLPrPUpBNCkFznueILpspxqkpNChSpY2FIKlIG4gK5gbYlvwYgW/wvNKYVGF1RpJNWUTinH1FKI+0pg5J5VUo84iMvx93gOOvhJW5GrB6jhBJKyAw+7UiC2oKxq6apOoIrTZD2YWpuQGyrb8242HGzftxLJss4miEj9pvNcFZrkSlj+0Q5zopJKZg4OMQ3KEV1rL0JAyFYGzcpUgdaULlqCVpSHNCQSknY5UWPFoeqzTaulHNKTlseLM+SVpKTUHbFsy1GzSZupUqUr9JDFPPApPQxXsGnLIHSbvmEsEpAOuFDeyI7ZZlSiMQSEkgBYShhsxeF0wSUK+sYjnlJSUlWe0xly3MPUd7FdNhmOapG9kj/AGxNIuyYfpgDcPkIJ2eQ9mkTduOUd5lspJ/YWkfqxTXMUXNBDN1sbnKlsD7VZ5stYSpZCVFkrClAPsUPo8axcFjmplKeav1wCAtVMIVvqa+W+I7YkqQXIIAdm2b390HryktJkrz72XKmE7VFK0KPMyyecSew6csuTNXVYlLD4ylOXrGFarKpCwCslCiwU58J2KD+cGbnuslKcTpQEhyS3TTPWI74wYVJQkYR9Il1Ftd2sWTu+jnk7B6rsrhK1O7M3XWLU24UJcKms2xGIv7B5wTvmzqC5cw5zbPJmHYSpLE88LneqKLnaIJajjsanKqoFWOwhWNMxLKlsSzMUlhiAIpUjqInl3VLIeo4t8IM9nZGO2pRpMkz0ngJcwjzY8ooSFgpD519sL1HVll8LKV5WAJAXLamaTkRqQcxE/8AV8vwmoxAKTXQ/DLlFlbMRoxgkuQPQ7FMzJTPTxwrcAc1kQRm2ghLLkFegS2IZXF2I4NHLiu552CYCShSFbMSCpIf95J4GNzY7ts0iRjny0KKUKWsqrRNSEg0zZI21jO/0dr9IttomrCQjAoqGSU4ikIQGyYD9yGLlTbYxvsu3PdCp04lQZHjKSapUUlmO5yDvY743VksGBDAknxOauQqp4GvCBibQlUqmFClEkP4WxVZ8wztSsRTrwUQUy5dE4vUZvE7kuwObvXImsc7bNthO2kJw4leFy4LCupHmeMDZUyV3neFaXAKcRUxKSXNAQl3djnGftdpGIoX3izm6VFSUvvwtkAOejxyz3eCXKJjnL1QKb1E1y65QWzFmvlTkKAIwL+0Sa9ARCjPIuozAFCeSNMqNpm3SFGql6KzI9o7MJVstCQwAUW3BTK97QF9LSxOwtGl7ZlHp9oKz4NdKYU1zp1jz8HCVIUDiCiODEg05a7I6RVjqK2GpVuSUqU9Af5QcuySFWG1EfQnyCD+mJwVltp0jHWSzjuJzqq6cIch891eojadk0H+q7Y+feWYn/8ATZxjdUmZgqYMnLBNN3shgG6GWicHKR64wUJAJxO3rcM94iNV4pCgkuC5ChsaOTTMSTthrsqn8fsgIoZoHI0PtiK90BKykf4fkEw/sdaErt9jI/vKhsqfKOdpDgmTFN6oSW4YYd9jrp/RlMJEJ0xDYJqZiQqj68YskcI5d7nnC3dgXfYVtXHaAT+tLECBNOgPT4wdUj8mWM7Jlo9qICEmN6nJ11PqjofZ5iCln/8ATAdRbl/6SeuUCgYMXcn8l/8AzD5yzBB7MtHkDTJQL4lHM7uVK+cX7rupU2iaJ1UcvnFeTZVTJmBNS5z03mD9utibNK7pNVNU8fefIVgSvkzW7sgkSmu2Sx/91O/glj3QCUqNLZg91Sf+6mfwJMZhWZ4kRrV5Nan1Qp58KuB9kaS8ZeKx2It/YSh5zvjGXnHwmNreSfxGwn/Cl+XeQR+v9HQMmm0KwpDk0GZOyIbQo4SHzEIK02Q2aadPbGI/Y5dmp7Rp/B2RX+Skf7ozpVGm7Qp/F7Gf8lJ8sUZZFTQGHV5N6nQc7FIxXjI/Rnf6cyAqEs43mD3YNP5Ts4OyZ/pzYoT5JCgEoUoqVRmCRk5Uo5CugJ3GNNfFGkrhRSmhkl6UPsjTSUNd93lIqk2hQDgElKwdd4EC1XOlnmzXP1ZYISOJUUrI3sl9kGLOmWkBMtGLLASVEJduCU1epBECeKoorEoiy2i1I/G54TLKk/gksEhI8QC1hIKiFNRFKZwfui67PLBIYoQ30drthbPZUl6xTtVjCQ61EUDAMczvYHMbIEzLcUZDBVzhOFROVKkAtSg9pecn2aDV4KWQEpl4n8WLGpOJqhJBD03FqZ6xyfPqzeBxTMPV1EEnE41ypXZA02u0TEhSQFJBNSUlQLO1Toa5agCKqUAjxY1Yqh1oYnaGIAyagYbIVRBUkJdTJSwLlgpRy8IqSH9VviDDbepWBKUrDNUAgDZk2oLvuHOobIhgcJGb4WxBsgo51cdIdJmpSlgpVHcLTm+wuVDP2ULGFSImReNpqws5D6qUnoMYpplpCiB9hQP1Hc6mr674UWZA7tmB6XPJrQFmz8KTGEvC1k94SXK1YjXaX2+7WNvf15SrROXMlF0qSKHOiEgv0jIGxnu1S2NS7sls3Zn9kaj8VuWo9wV3xYZa8aZe6PROyBe7LaPtWU9VLEYtV1mhbTVhruBjcdjE/k63jQGy78lrjo2mtgi7ZiL/AFYZ77UJ94y++cVDaSEtUucWZBFCA2m+Dt83cJiwSB6oDuRkTsiqm7MvVpuP/Ib4M0glJJhH+jpb2+z1p3qRm7ZwX7XI8c/ck+Qin2Osol26ygN+dQcmzPGDHa6X+Fnjcr2HpBJ7pnSG6AXZWxSlSQ80S1uSUrBTn6rFTAhmq/zI2q6pqQo4XADuKhq1cU84u3f2RtGHAq0sgn1SuatJO9LgExftHZ2WmzTpiRLUUIUcSErlCgLjMhcGMZM5OHbRXQn8l2X/AK08fwmM/NNTxMaSzj8lWf8A7icOoB90Plykd0lU2ylSGbvEsSWcZUL8DBqRyexqUbijK4o0V0p/JR3Wz2yojtd12MpWUTlS1BKjhXtAfCygP4jE9yKBumaNRa0luMsB4lBqLsNNUxvZWagzJ6aYx1ZwSOFRFHtFZ1Y5hzY4v1Tl0EMu4izzF2haVFJyZcsOWCSwKgdDRjFe/L975QUiXhARh8RD6ufC41yeKtkv2EqWxobBW6UbrWv/AEkxibVbAmcpBqSTh5ZvG2uYg3Sd1sPnKTHn18si0LpVSkmmbMnTqIZK2zbScQlNyjeXoHu6w/8ATA6Ffxjzt49Gtoe7LCfsqHRSh74ylUP6Z0TCTVMo8Ve0xGpTiJbVKJmLyABckkJSHANSaDPWGWWVLmzUSJK+8mKOaX7tIGZc1VtdgGGsZjH5HPF5G0vlP4tYj/k5Y6YoBXZKVOKe7llSDks0QWzKQKqZtwpnB62W6VLlSETlIJkyxKCQAoqYmpqc32UeH2C9iqUViWRhASk4CCSWYUIoMIbYwhlTdndor2W71yJiZmI98xwlKSSlJBHhAyoTUuamuUP9BmKWcRKUpGJTgJLbgHAcNntiZMsEhZY4VPRIQEqfYM8zQsdYuSHVjZKQBq4IOhJJDhmGuvOM7PkqZQVakJAwJlGhqpRWos2XhpUhtKiKU+bMW9CH8RDOMqtizoByJrBG1TJaWerEkgiuj0Gg8Obmgi3d2EApAOFqZk6bMg2rjWsDQUZibPUcXeYiHxFmwuKZCiNMhDrKpIUVJRTYVD2Kz3e/WzeqcK6qmK+jRRX62TEM9H2wPnyZikn8FNmagBBXs8NX6wqJUK0W050QKEBIcUGzXMHc9IHf1rTFLL7G1YsHIru4RNb7JaygpTZJ7kBIPczNzl8OTPXb1ipMuy0SwAspQQWOI0dgSdhzApvDgho2o+zLK9ntcxQxIWpqvhBVuqctcvhF+R32HxvgyzIVrkDTQZmvOH2eQoEEzHFWCSEhjtzyrlB+V2ctSk4kytH8ZwFtjGvlBzwiKVlRMUkETcOjKXhLjdWkKNL/AOAiQk+lpQSASkyphY6h8dYUOEiPGRZFByEqGTYVO2xxVuBixZ7fND4xiybL7iLtoSsj1Uk7cRB84ry5S2coUDX6qvMH4RpyMtlpNtQpm8LaF/bkdkaTsOr8St4NCr0bCDTEylkttjJ9xUOg7qU26ZHnEwWtvWWxqxfTjlGVKJRaTCN5qwlLgh38v5xVlreIF3jMDEoxJ2GrbxEsi8JeIOFJL6gNtGZbMRmcbexOKbsO3OpHp9gw5/gcdX8eNY5eEIpBPtal7TNG0qHmoRnbqtaBbJM9SmSiZLPq6IIxM1DkcoN31eEqdaJi5ZxArWRRixUoihrkY3Lr/DtDY9D7EzkzrMFWuRJlrcGWEHFjl4UlK2ClF3xdBGV/pCvqTLVNs6AhGKWMIMtZWrEzgnEyPpF2+izF4CXd2htcsS5cuVKCUDCFlBWogBsL0KX3OIHdrT3/AONTKTmlowpcJo70IfJ6vG4yipUTya5DlhrdErdapn8BMB03q0wy1i0FMsoVLVISkmWo4vErFRi7V90E7omvdH6NtbrK+cV5V4plJKVzxKrVJPrZMW67Yy38mK4At733PKVylTCpD+ErQEzQA3hJ04AQNsl4rlBeFR8WEEaEAhTH76xNfUyVMONJc4tHalciBnXrugTOneEEtVJJ4uQKbqRcmeDa9lL+mzJ3o6UIYpUplhwT4aAitdpEEu0ljSiRMUuzJCqNMQpLAkgZJCS3EHOPPrqtq5SiZSyKlw5ByIrqCxI5wSTfc6aBJVLVgUpLlTlsLMEgABIp7TqYVzwD3Np2aL3TN3WsHrKQIzN7dnzNWZyVJJABZSsOTJzIpk+cHeyltli7J6VKAJtCFAHPJAyzqxi6LXYZB71K5UybhKCpSHcO+BNCCxaMTlUmaq4mItVhnysKpplsr1QlYWeNKN8RHoRWFXVY6inejP8AxAPfEFmlyVLMxMqS+eKVgBDvqhiBXcYuG1gAeCaC2T4v4ngepGqQRjiefX12ctFptKQhhLOEOpaWSrInA+J6DIeyNJdHYpdlTilFUycoYVF0poS5CBoKBySfdBSVeRYFctIUHNEJWzDdhL8AYkn3+EgKKggPQnEh6DJsVWHlGXKTVJodrtlWV2btKCFLRKQXq6ipR2uRu3wPvETEULIaYSEg4gpAZiVOFBVKNl0ggi/5SyZhUsuNFJYjgvCMxlRt0K2XpIUFgzCFEUC0uHGTlBUQN4fOCpFfo0d/XbZZNkRPIJWuWklJUvxkJx4QlJFSo67YE2jvhLQkWYqQpqSyygCMzjmJAyD6vFOyCUpCQZ8pIrkZgcltCgCjbYnmXTJZ02k5ZplqOr5p95jo7r6mbFabFhRiYJcJzqsU2OxIrXfrGrsd52ZdnlSu+KZkpKErJSKBRSkkqIKHGdDGVkWCWl1ItMxLEeolTDLPxEcjti9OVKmVwIUpOqxhJ3nwxmFxdoWrNfdf54plzkrSASlwlThkAMUkUIq+1Rq1AEmSLQJgnBKpfdBYwmUUo8RLrGbgBB5TK6MEsdknS1d4ictJ07tVOigAYuW2/wC2GWpPeTJmLEgowyXI8QV6qMt76x1zdbmaoNCYqcEYkklnx4iHBqmjZ+Js4H97ZJfeqmSsXcqUAJkzEpS0oxKYTCQpwsAZ+LFxgCi87S/4ZU2Wgg1CVEaZ4SKbw8BJtrUpasJISkv4khydVMXI5tvi8qSBq2bC8b3swBTIlpExRS6UpExKQVALUSgYQQCaAnLlHbPftolLwqUJkpYGJS2lqlnxeoHSxrmXyjGAzFA41q/RxFjwrlVusMWohyAKbSngAHLHPPP2xlal9G1Fm7Vf00rXhnDA4wfmlHDhS7kgn1sWuTRyPO5s8LJUoTHOx2GwUpTdCi8jM4g08IQXuHshoXHQqPOcR6VjYYcFJ3xG42R0NsiKyRSEnWI/Rht+/OOuI6DviIj9DFWhCxfaL8qRODwhwbZBbIreinRX36xKhc5OSzTJ6+2JQd5joG+G2KbOqvNZAC5cpTZOIcVyhhJUUqcEFJIws1H8tYYU7xzhipD/ACMaU6NKb7Kl/T1zkg4nwgpYO4zqduYrujPJmFgSKhKsm+sflGkVY/EFajWFNsiXSvCMYFD9E+IkhQ3x1jqIVK+RtyXPIXL7xUxUpR09Zehdsg7uIN2eyIahOJNACA5oTy16ZRaF8y1hIXKEts8LENkAnLoRA28lLAJkyzOBBo1CDQvClKW6FySOXlcg7vGk1poRSoyFHoYCiehACc1NVxmfh8Ill+lISKJIzISvEoBq6MTxJijeEibMKe6QrJQZIc6OWGlfbGat0dE1Rb71SVOksSzkEvowpwgpdPaCcJ7FSlggUf2DllAVMuYlH4RCkkMGYh94cRQtKFBaAhOJRLgPUHXgIVDpjZ6Nbe0ngUxS5yxoxHTRQGu7KtYAKv8AnKUQJUtVdAUt516QptmSsuVKSd4Sdmw5RasE4yRheUsVd5Ydzq5JrpXSOdJA7ZSRbjgUooRiBDMrzIPDN9YpFbpBPhJcgM5NcvbBC8p+JRUyQDomiW4bKnpApdq5PQVoSKZ6ZxJDwWrntc9IUysKQaAlxvAFQaAZwTuefPUoBMjvc8S6owvrjBCXDu27WAtx2uZZ56kzJSVKUEqdRfCwcAdQOgjT2e/7TNWhDgAkBhQMaHg9c9sdbaZmgiq32hIGBQUATVYCjo6S5ahG/M1rFta0TZC5heVMlpJISfCpgTkHwgtoKb4HzbVhlpAAqZhVn62NSS2weGGXFNVOWqTiCMaCHw4qPUM9XDjOO7ja3RgzqO05IKAo4SQdgJGWIB6jOFZ3VMClTF6kYSSoZZeKmvSKV4yFJUcTTEpJSyw5GBRQSkio9X4w65AQpSSQEHxBDmh1ZzX5RwaS4HcM2W8O7SwUogmoBq7tSqRm5zi2bYouMZUMgSpdOAxZ8XgXaZTlwc69eUOSVUFBlodN4y0jiDCBtLnJmA1JfaakxXnLJUEsGcKVwrnsq0SJJYEgOaeFiNKUo+VIjmpFFFn8QIozjCQ70piMKdGkqRLLCmHhTzeFFA2qp8ac95jsZszaB5IjgMMC9vWHCA5DsW+OhRiPDCrtiIlEwx3vIhhzGIiYTeUPE2K4VHIqIs99He8EVXhCIi2Jkd7wRUCjCUqKiLqZg2x0l9h8vbFELjoVBRF3lHUqIDDE2bacYp4ocFxEWQojIjoIkxuKg8Qx+BHWIi+AFtSMhvavIxAF8RCzSky4QlTYlEn7TkDYW274rT7pBqkSVZ1WJj9MYBeEF74c52twMKk0bU/ZDJuNYc47PL4yW6Elj1iVdwWgDEmeg70yQR1Bh/eq2vxieRbAkglKg31S280+cb8jHNFP0RbMo4iPs4Q7V26tAq87J40gksrIhyegNKtp7o1K71dPrB3+kmrbKe8wrTKs00yyoVBNQQMykhnDZA9Yoy3Olp9lJSJoSiWWdIYhJzyNdWfLlxglcVus1nnjv1AKIJYJUoBnbJ601rwive8tXePJ8IIIUpVSOAfdDLBIlIcHEpasLzVOSG+qM0p1pUwpq9zDl0Xe0t5JWrFJkz1pGiZC0hIpt31y1MB7svaZJmJmJkrLaFkuDmKxprvv+fI8P52WNFZgHYTzzfKLk8WC0B8XcTNQQQP+J5GPTDWjVMzyUJ3Z5NrlKmypZQo4lMqYlYxElRfUZxh7VIWiZhIOIBiNOvRo36LitlnPeSFYk7UkEEbwc/OKd52iRPLWuSuVMy7yWD+8k0PmYHD/AJNJmSkXgpKSSKEBnyppWCliUiYgTKeLN89c4Vq7LKWPwE2XPTVglWFe50qY6AUfOKdnsE6SkJWky/slKEkk0zUXJPCOMoDVkqpyROSgBqs41JqOOUE7YhIQMSEkJJLmpdTOTiJ2ecZi3S1hYeheh3mgIbj5RfvYqYJSo0Z83y1jm4vYaZKu8a+FIbSg+UKKCkq0hRYo3SG1hwfSOmOJMYPIPCtohzb4b9xDoAOlMNeOhen34x0MRtHCKyFCIhzQqRWQ0COFI2Q7EPuRCCxtHlCIzDHcMPxDlHYgIsOyOAGJm4xx4iInhwMPYb+kJSNTEVj5ivCkOWqW3uYZj21iRaaJ4e8xCUxMh6U7I5iI3Q0RKFGATgVDxN5xHCwmIB+IGHS0+IcYhKYlkJ8Q4iFCT2u1LKzUkA0Bq332RNLvdQIJSFEChNRxY0LcGiitRc8TCETZKTXAZM2VNIqzvQGrncr1uA2xHapQSogYmbV0nntgSUxPKti05KJA0NRCmazT5QRsa5oUO6KwXyQT/tg2i020+FaCtJP9pKx+59fZASw3qE5pIfPCojhQvBiV2gkuH7wbKDryiy32ZtY+yxe9wsoEIlYSknGFLl+MvhQAAoFmd6UIjkmwT8HgmlVHwLAWls6PQ7SGo+2OLv8As0wgqMzwghJwpPQYs9XieTeFnSApSnclhhY78WFRd/jSOnmkapAu33UVAGbZMqhUkrlkZeLC2HZpAq32CUWKFTUGoImgl92IE67o3Uu/ZRSEKnJoASVhVaUfEBoX5wy12+zTUkKmyikhvDMKSXo/q5tSNeRPlFx2eR22SAqqgOFRypCjXWvs6FLJQpARknxAuBrlCjOSN/0zKVu2w7s/OEiWdBvqYUKOJ5hrEHPOI8egVUu2emcchRpEOWGFSWGxvuY5LWD4gFGubgOdurQoUMVasjpDfR/f+CYayWqAOZPuhQogHMH0LbXMPwjYOQhQoGIgkaAdPnxh5Tu8z8Y5CgZEspAcYnAcOXBID1O9hWDEm6LMt8NpIOIJw4FKZ3bxMl6AnIczmoUK3JCRddn7oTfSl4cWD80XxZ7csP8APSKMiTLMzCpZ7t1jE1SEglB9UtiLaFoUKKioltFis2E4bUSrC4AlLDmjJJxUfbuO2Hrk2EK/82rC4FZSyWLDNs8W6FCjSSbGil3tnMwgTSUYkMcKgcFTMURtS3OLaUWFVRalIzZKpSlK6pYZER2FDiiocqzWNw1sOYoZK3Dvmdckmm07ISJFjxEekqIYMvAsB3UCcOEnRNKesa0jkKBpBRKuzWPMWknb+CVXap9BqzExEZNnTNS08rl+PEoIUggh8LA4icTJ3bSM4UKCiokt6bKEKMuctS6YUlJYupi5KR9Fzy30GCdHIUEkDF3w2ffrHRNDPChRgByVpzFOsPJDfJ/hChQCdG12hFREKFFe4EgmPQuM94HCtI45AzFI5CiFcDismpAPIQoUKIzbP//Z" ,
        desc:"Béja est une ville du nord-ouest de la Tunisie, entourée de collines verdoyantes et riche en histoire. Elle est un point de départ idéal pour explorer les vestiges romains et les paysages pittoresques de la région." ,
        name: "BEJA",
        location: "beja , tunsie",
        price_range: "20DT - 30DT par jour",
        rating: 4.3
      },
      {
        id : 5 ,
        image : "https://www.climamed.eu/wp-content/uploads/2021/02/portbizerte-191020-7.jpg" ,
        desc:"Bizerte, située sur la côte méditerranéenne, est la plus ancienne ville portuaire de Tunisie. Elle séduit par son mélange d'histoire coloniale, de plages magnifiques et de vues sur la mer." ,
        name: "BIZERTE",
        location: "bizerte, tunisie",
        price_range: "15DT - 40DT par jour",
        rating: 4.5
      },
       {
        id : 6 ,
        image : "https://kapitalis.com/tunisie/wp-content/uploads/2019/01/Neige-A%C3%AFn-Drahem.jpg" ,
        desc:"Aïn Draham est une station de montagne située dans le nord-ouest de la Tunisie, célèbre pour son climat frais et ses paysages forestiers. C’est une destination populaire pour les amoureux de la nature et les randonneurs." ,
        name: "AIN DRAHAM",
        location: "jendouba, tunisie",
        price_range: "10DT - 30DT par jour",
        rating: 4.7
      },
            {  id : 7,
        image : "https://res.cloudinary.com/lastminute-contenthub/image/upload/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Africa/Tunisia/Hammamet/hammamet_shutterstock_1328602211.jpg" ,
        desc:"Hammamet est une station balnéaire réputée pour ses plages de sable fin et ses eaux cristallines. Elle combine charme historique, avec sa médina, et modernité grâce à ses hôtels et complexes touristiques." ,
        name: "HAMMAMET",
        location: "nabeul, tunisie",
        price_range: "20DT - 60DT par jour",
        rating: 4.7
      },
  
        { id : 8,
        image : "https://linstant-m.tn//uploads/6639.png" ,
        desc:"Mahdia est une ville côtière historique, connue pour ses plages dorées et ses vestiges antiques, notamment les ruines romaines. Elle est aussi célèbre pour sa médina tranquille et son port de pêche animé." ,
        name: "MAHDIA",
        location: "mahdia, tunisie",
        price_range: "20DT - 50DT par jour",
        rating: 4.3
         },
          { id : 9,
        image : "https://themarkaz.org/wp-content/uploads/2023/03/La-Grande-Mosquee-Rue-Souk-El-Ghzal-Nabeul-Tunisia.jpg" ,
        desc:"Nabeul, située sur la côte est de la Tunisie, est connue pour son artisanat, notamment la poterie traditionnelle. Elle offre aussi de belles plages et est le centre de la culture locale et des marchés animés." ,
        name: "NABEUL",
        location: "nabeul, tunisie",
        price_range: "25DT - 50DT par jour",
        rating: 4.8
         },
          { id : 10,
        image : "https://res.cloudinary.com/lastminute-contenthub/s--Rzzg9eSB--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Africa/Tunisia/Monastir/shutterstock_1338384470" ,
        desc:"Monastir est une ville côtière paisible, célèbre pour son mausolée de Bourguiba et son ancienne médina. Elle combine une riche histoire avec des plages ensoleillées, en faisant une destination idéale pour les visiteurs." ,
        name: "MONASTIR",
        location: "monastir, tunisie",
        price_range: "10DT - 40DT par jour",
        rating: 4.1
         },
           { id : 11,
        image : "https://tunisie.co/uploads/images/content/medinadesouss-200919-1.jpg" ,
        desc:"Sousse est une ville dynamique qui allie un patrimoine historique fascinant, notamment sa médina classée, et de belles plages méditerranéennes. Elle est également un centre touristique animé, avec une vie nocturne vibrante." ,
        name: "SOUSSE",
        location: "sousse, tunisie",
        price_range: "25DT - 30DT par jour",
        rating: 4.6
         },
          { id : 12,
        image : "https://www.engagingcultures.com/wp-content/uploads/2016/01/Great-Mosque-Sfax-Medina-Cafe-Kemour-View-1.jpg" ,
        desc:"Sfax est une grande ville portuaire du sud de la Tunisie, réputée pour son industrie et son rôle commercial. Elle possède une médina bien préservée, où l’on peut découvrir des monuments historiques et une ambiance authentique." ,
        name: "SFAX",
        location: "sfax, tunisie",
        price_range: "10DT - 40DT par jour",
        rating: 4.2
         },
        {id : 13 ,
        image : "https://www.infotunisie.com/wp-content/uploads/2017/08/sidi-bou-said-tunisie.jpg" ,
        desc:"Sidi Bou Saïd est un village pittoresque perché sur une colline, célèbre pour ses maisons blanches et bleues. C’est un endroit magique, avec une vue imprenable sur la mer Méditerranée et une atmosphère artistique unique." ,
        name: "SIDI BOU SAID",
        location: "tunis, tunisie",
        price_range: "10DT - 35DT par jour",
        rating: 4.8
      },
        {  id : 14 ,
        image : "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRbFQP9YL05oid0L-ZblAcFCHuMANnTHwrkf_3uCNgDkgdRs19ItdxvdA1xXWGEC8Dfaec4TkrGltErZLE2JUtYt3Jj_F5UbRy5lV9KPQ" ,
        desc:"El Djem est une petite ville emblématique, abritant l’un des plus grands amphithéâtres romains encore debout. Ce site classé au patrimoine mondial de l’UNESCO témoigne de la grandeur de l'Empire romain en Afrique du Nord." ,
        name: "EL JEM",
        location: "mahdia, tunisie",
        price_range: "10DT - 20DT par jour",
        rating: 4.5
      },
        {  id : 15 ,
        image : "https://sacredsites.com/images/africa/tunisia/great-mosque-kairouan-1200.jpg" ,
        desc:"Kairouan, l’une des plus anciennes villes islamiques de Tunisie, est un centre spirituel majeur avec sa grande mosquée et ses monuments historiques. Elle est également connue pour ses médinas et son artisanat traditionnel, notamment les tapis." ,
        name: "KAIROUAN",
        location: "kairouan, tunisie",
        price_range: "15DT - 40DT par jour",
        rating: 4.4
      },
      {  id : 16 ,
        image : "https://tunisia-travel-guide.com/wp-content/uploads/2024/09/zarzis7.webp" ,
        name: "ZARZIS",
        desc:"Zarzis est une ville côtière située dans le sud-est de la Tunisie, au bord de la Méditerranée. Elle est connue pour son climat méditerranéen doux, ses plages de sable fin, et son importance économique régionale." ,
        location: "medenin, tunisie",
        price_range: "15DT - 40DT par jour",
        rating: 4.7
      },
      ]
  
}
