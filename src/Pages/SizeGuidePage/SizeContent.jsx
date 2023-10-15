import React from 'react';
import {Table} from "antd";
import './SizeContent.css'

export default function SizeContent() {
    const columns = [
        {
          title: 'FOOT LENGTH (inch)',
          dataIndex: 'column1',
          key: 'column1',
        },
        {
          title: 'SIZE EU',
          dataIndex: 'column2',
          key: 'column2',
        },
        {
          title: 'SIZE UK / IE',
          dataIndex: 'column3',
          key: 'column3',
        },
        {
          title: 'SIZE US',
          dataIndex: 'column4',
          key: 'column4',
        },
      ];
      
      const data = Array.from({ length: 27 }, (_, index) => ({
        key: index,
        column1: index === 0 ? '8 1/2' : index === 1 ? '8 1/16' : `Row ${index} Column 1`,
        column2: `Row ${index} Column 2`,
        column3: `Row ${index} Column 3`,
        column4: `Row ${index} Column 4`,
      }));
      
      const data2 = Array.from({ length: 27 }, (_, index) => ({
        key: index,
        column1: `Row ${index} Column 1`,
        column2: `Row ${index} Column 2`,
        column3: `Row ${index} Column 3`,
        column4: `Row ${index} Column 4`,
      }));

      const data3 = Array.from({ length: 16 }, (_, index) => ({
        key: index,
        column1: `Row ${index} Column 1`,
        column2: `Row ${index} Column 2`,
        column3: `Row ${index} Column 3`,
        column4: `Row ${index} Column 4`,
      }));
      
      const data4 = Array.from({ length: 16 }, (_, index) => ({
        key: index,
        column1: `Row ${index} Column 1`,
        column2: `Row ${index} Column 2`,
        column3: `Row ${index} Column 3`,
        column4: `Row ${index} Column 4`,
      }));

    return (
    <div>
        <div className='title'>
            <h1>Size Guide</h1>
        </div>

        <div className='main-content'>
            <p> <h1><b>MEN'S SHOES</b></h1> <br/>
            DETERMINE YOUR SIZE <br/>
            Use your measurements and the table below to determine your shoe size. <br/>
            <b>Note: the length from your heel to your toe (cm) will be slightly smaller than the size in cm on the shoe box. We have already taken this into account. </b> <br/>
            <h1>SIZE CHART</h1>  
            </p>                  
        </div>

        <div className='table-container'>
        <p>INCH</p>
        <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false}
            scroll={{y: "100vh"}}    
        /> <br/>
            <p>CENTIMETERS</p>
        <Table 
            columns={columns} 
            dataSource={data2} 
            pagination={false} 
            scroll={{ y: "100vh" }} 
        />
        </div>

        <div className='main-content'>
            <p> <h1><b>WOMEN'S SHOES</b></h1> <br/>
                <b>DETERMINE YOUR SIZE</b> <br/>
                Use your measurements and the table below to determine your shoe size. 
                <b>Note: the length from your heel to your toe (cm) will be slightly smaller than the size in cm on the shoe box. We have already taken this into account.</b>
                <h1>SIZE CHART</h1> 
            </p>
        </div>  
        <div className='table-container'>
        <p>INCH</p>
        <Table 
            columns={columns} 
            dataSource={data3} 
            pagination={false}
            scroll={{y: "100vh"}}    
        /> <br/>
            <p>CENTIMETERS</p>
        <Table 
            columns={columns} 
            dataSource={data4} 
            pagination={false} 
            scroll={{ y: "100vh" }} 
        />
        </div>
    </div>
  )
}
