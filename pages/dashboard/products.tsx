import dynamic from 'next/dynamic'
import { useState, type ReactElement, useEffect } from 'react'
import Head from 'next/head'
import { Breadcrumb, Button, Checkbox, Dropdown, Spinner, Table } from 'flowbite-react'
import { HiDotsHorizontal, HiHome, HiOutlinePencilAlt, HiOutlinePlusSm, HiOutlineRefresh, HiOutlineTrash } from 'react-icons/hi'
import Link from 'next/link'
import DashboardPagination from '@/components/dashboard/DashboardPagination'
import DashboardTableRowProduct from '@/components/dashboard/DashboardTableRowProduct'
// import DashboardLayout from '@/components/dashboard/DashboardLayout'
const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })


const Products = () => {
  const [dataProduct, setDataProduct] = useState(
    [
      {
        id: 1,
        name:'Fatalis Coach Varsity',
        description:'PRE ORDER -40 Hari-',
        price: 550000,
        size: 'M',
        stock: 5
      },
      {
        id: 2,
        name:'Fatalis Coach Varsity',
        description:'PRE ORDER -40 Hari-',
        price: 550000,
        size: 'L',
        stock: 2
      },
      {
        id: 3,
        name:'Fatalis Coach Varsity',
        description:'PRE ORDER -40 Hari-',
        price: 550000,
        size: 'XL',
        stock: 5
      },
      {
        id: 4,
        name:'Fatalis Coach Varsity',
        description:'PRE ORDER -40 Hari-',
        price: 550000,
        size: 'XXL',
        stock: 2
      },
      {
        id: 5,
        name:'Trick or Treath Crewneck Patch',
        description:'PRE ORDER -40 Hari-',
        price: 475000,
        size: 'm',
        stock: 11
      },
      {
        id: 6,
        name:'Trick or Treath Crewneck Patch',
        description:'PRE ORDER -40 Hari-',
        price: 475000,
        size: 'L',
        stock: 10
      },
      {
        id: 7,
        name:'Pirate Hunter Cardigan',
        description:'Return / Komplain Produk',
        price: 400000,
        size: 'XL',
        stock: 10
      },
      {
        id: 8,
        name:'Wolf Girl Tie Dye Tshirt',
        description:'Return / Komplain Produk',
        price: 200000,
        size: 'M',
        stock: 0
      },
      {
        id: 9,
        name:'Wolf Girl Tie Dye Tshirt',
        description:'Return / Komplain Produk',
        price: 200000,
        size: 'L',
        stock: 0
      },
      {
        id: 10,
        name:'Paw-Paw Reversible Puffer Jacket',
        description:'PRE ORDER -(31 Hari)-',
        price: 600000,
        size: 'XXL',
        stock: 2
      },
    ]
  )
  const [loading, setLoading] = useState(true)
  const dummyApiProduct = {
    message: "success",
    data: dataProduct,
    current_page: 1,
    first_page_url: "http://localhost:3000/dashboard/products?page=1",
    from: 1,
    last_page: 1,
    last_page_url: "http://localhost:3000/dashboard/products?page=1",
    links:[
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost:3000/dashboard/products?page=1",
        label: "1",
        active: true
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false
      }
    ],
    next_page_url: null,
    path: "http://localhost:3000/dashboard/products",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 10
  }

  const handlePageClick = (page:number) => {
    console.log('page number:', page)
  }

  const _handleAddProduct = () => {
    const newData = [...dataProduct, {
      id: 11,
      name:'Paw-Paw Reversible Puffer Jacket',
      description:'PRE ORDER -(31 Hari)-',
      price: 600000,
      size: 'M',
      stock: 10
    }]
    setDataProduct(newData)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 10000);
  }, [])
  

  return (
    <div className='w-full h-full min-h-screen px-5 py-7 overflow-y-auto'>
      <Head>
        <title>Stock Product | FTH Product</title>
      </Head>
      
      {/* BreadCrumb */}
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item 
          className='group cursor-pointer' 
        >
          <Link 
            href="/dashboard" 
            className="group-hover:text-blue-600 dark:group-hover:text-white flex items-center gap-2"
          >
            <HiHome />
            Home
          </Link>
          {/* Home */}
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item href="#">E-commerce</Breadcrumb.Item> */}
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
      {/* End BreadCrumb */}

      <div className='p-4'>
        <header>
          <h2 className="mb-6 text-2xl font-semibold dark:text-white">
            All products
          </h2>
        </header>
        <div className='mb-5 flex flex-wrap gap-4 w-full md:justify-between'>
          {/* Component input search */}
          <form className="w-full md:max-w-md">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
          {/* End Component input search */}

          <div className="flex w-full flex-wrap gap-3 md:gap-2 items-end md:w-auto">
            <Button color='blue' className='h-10 w-full md:w-auto'>
              <HiOutlineRefresh className="mr-2 h-5 w-5" />
              Refresh
            </Button>
            <Button 
              color='blue' 
              className='h-10 w-full md:w-auto'
              onClick={() => _handleAddProduct()}
            >
              <HiOutlinePlusSm className="mr-2 h-5 w-5" />
              Add product
            </Button>
          </div>

        </div>
        <div className="w-full ">
          <Table className='w-full  px-20 relative mb-5' hoverable>
          {/* hidden md:table-row-group */}
            <Table.Head className='text-gray-500 hidden md:table-row-group' >
              <Table.HeadCell className="bg-gray-100 dark:bg-gray-700 p-4">
                <Checkbox className='checked:text-blue-600 focus:ring-blue-300 dark:focus:ring-blue-600' />
              </Table.HeadCell>
              <Table.HeadCell className='bg-gray-100 dark:bg-gray-700'>Product name</Table.HeadCell>
              <Table.HeadCell className='bg-gray-100 dark:bg-gray-700'>Description</Table.HeadCell>
              <Table.HeadCell className='bg-gray-100 dark:bg-gray-700'>Price</Table.HeadCell> 
              <Table.HeadCell className='bg-gray-100 dark:bg-gray-700'>Size</Table.HeadCell>
              <Table.HeadCell className='bg-gray-100 dark:bg-gray-700'>Stock</Table.HeadCell>
              <Table.HeadCell className='bg-gray-100 dark:bg-gray-700'>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {
              loading ? (
                <Table.Body className='w-full h-full dark:bg-gray-600'>
                  <Table.Row>
                    <Table.Cell colSpan={7}>
                      <div className='w-full flex justify-center'>
                        <div className='py-40 dark:text-white'>
                        <Spinner aria-label="Alternate spinner button example" size="md" className='fill-blue-600 dark:text-white' />
                        <span className="pl-3">Loading...</span>
                        </div>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ) : (
              <Table.Body className="divide-y w-full ">
                {
                  dataProduct.map(product => (
                    <DashboardTableRowProduct key={product.id} {...product}/>
                  ))
                }
              </Table.Body>
              )
            }
          </Table>
          {
            !loading && (
              <DashboardPagination current={dummyApiProduct.current_page} total={dummyApiProduct.total} onPageClick={handlePageClick} />
            )
          }
        </div>
      </div>
    </div>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Products