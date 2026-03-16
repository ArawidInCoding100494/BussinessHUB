import TaxesHeader from '../../Components/TaxesComponent/TaxesHeader/TaxesHeader'
import TaxesFooter from '../../Components/TaxesComponent/TaxesFooter/TaxesFooter'
import TaxesAnalitika from '../../Components/TaxesComponent/TaxesAnalitika/TaxesAnalitika'

const Taxes = () => {
  return (
    <div className='flex flex-col min-h-screen transition-colors duration-300' style={{ backgroundColor: 'var(--main-bg)' }}>
      <div className='h-18 flex flex-col justify-center'>
        <TaxesHeader/>
      </div>
      <div className='flex-1 container px-2'>
        <TaxesAnalitika/>
      </div>
    </div>
  )
}

export default Taxes