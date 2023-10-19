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
      
      const data = Array.from({ length: 26 }, (_, index) => ({
        key: index,
        column1: index === 0 ? '8 1/2' : 
                 index === 1 ? '8 1/16': 
                 index === 2 ? '8 13/16':
                 index === 3 ? '9':
                 index === 4 ? '9 3/16':
                 index === 5 ? '9 3/8':
                 index === 6 ? '9 1/2':
                 index === 7 ? '9 5/8':
                 index === 8 ? '9 7/8':
                 index === 9 ? '10':
                 index === 10 ? '10 1/8':
                 index === 11 ? '10 3/8':
                 index === 12 ? '10 1/2':
                 index === 13 ? '10 5/8':
                 index === 14 ? '10 7/8':
                 index === 15 ? '11':
                 index === 16 ? '11 1/8':
                 index === 17 ? '11 3/8':
                 index === 18 ? '11 1/2':
                 index === 19 ? '11 5/8':
                 index === 20 ? '11 7/8':
                 index === 21 ? '12':
                 index === 22 ? '12 3/8':
                 index === 23 ? '12 5/8':
                 index === 24 ? '13':
                 index === 25 ? '13 3/8':  `Row ${index} Column 1`,
        
        column2:  index === 0 ? '35.5' : 
                  index === 1 ? '36': 
                  index === 2 ? '36.5':
                  index === 3 ? '37.5':
                  index === 4 ? '38':
                  index === 5 ? '38.5':
                  index === 6 ? '39':
                  index === 7 ? '40':
                  index === 8 ? '40.5':
                  index === 9 ? '41':
                  index === 10 ? '42':
                  index === 11 ? '42.5':
                  index === 12 ? '43':
                  index === 13 ? '44':
                  index === 14 ? '44.5':
                  index === 15 ? '45':
                  index === 16 ? '45.5':
                  index === 17 ? '46':
                  index === 18 ? '47':
                  index === 19 ? '47.5':
                  index === 20 ? '48':
                  index === 21 ? '47':
                  index === 22 ? '48.5':
                  index === 23 ? '49.5':
                  index === 24 ? '50.5':
                  index === 25 ? '51.5':  `Row ${index} Column 2`,
        
        column3:  index === 0 ? '3' : 
                  index === 1 ? '3.5': 
                  index === 2 ? '4':
                  index === 3 ? '4.5':
                  index === 4 ? '5':
                  index === 5 ? '5.5':
                  index === 6 ? '6':
                  index === 7 ? '6':
                  index === 8 ? '6.5':
                  index === 9 ? '7':
                  index === 10 ? '7.5':
                  index === 11 ? '8':
                  index === 12 ? '8.5':
                  index === 13 ? '9':
                  index === 14 ? '9.5':
                  index === 15 ? '10':
                  index === 16 ? '10.5':
                  index === 17 ? '11':
                  index === 18 ? '11.5':
                  index === 19 ? '12':
                  index === 20 ? '12.5':
                  index === 21 ? '13':
                  index === 22 ? '14':
                  index === 23 ? '15':
                  index === 24 ? '16': 
                  index === 25 ? '17': `Row ${index} Column 3`,
        
          column4:  index === 0 ? '3.5' : 
                    index === 1 ? '4': 
                    index === 2 ? '4.5':
                    index === 3 ? '5':
                    index === 4 ? '5.5':
                    index === 5 ? '6':
                    index === 6 ? '6.5':
                    index === 7 ? '7':
                    index === 8 ? '7.5':
                    index === 9 ? '8':
                    index === 10? '8.5':
                    index ===11?   "9":
                    index ===12?   "9.5":
                    index ===13?   "10":
                    index ===14?   "10.5":
                    index ===15?   "11":
                    index ===16?   "11.5":
                    index ===17?   "12":
                    index ===18?   "12.5":
                    index ===19?   "13":
                    index ===20?   "13.5":
                    index ===21?   "14":
                    index ===22?   "15":
                    index ===23?   "16": 
                    index ===24?   "17": 
                    index ===25?   "18": `Row ${index} Column 4`,
      }));
      
      const data2 = Array.from({ length: 26 }, (_, index) => ({
        key: index,
        column1:  index === 0 ? '21.6' : 
                  index === 1 ? '22': 
                  index === 2 ? '22.4':
                  index === 3 ? '22.9':
                  index === 4 ? '23.3':
                  index === 5 ? '23.7':
                  index === 6 ? '24.1':
                  index === 7 ? '24.5':
                  index === 8 ? '25':
                  index === 9 ? '25.4':
                  index === 10 ? '25.8':
                  index === 11 ? '26.2':
                  index === 12 ? '26.7':
                  index === 13 ? '27.1':
                  index === 14 ? '27.5':
                  index === 15 ? '27.9':
                  index === 16 ? '28.3':
                  index === 17 ? '28.8':
                  index === 18 ? '29.2':
                  index === 19 ? '29.6':
                  index === 20 ? '30':
                  index === 21 ? '30.5':
                  index === 22 ? '31.3':
                  index === 23 ? '32.2':
                  index === 24 ? '33': 
                  index === 25 ? '33.9': `Row ${index} Column 1`,
        
          column2:index === 0 ? '35.5' : 
                  index === 1 ? '36': 
                  index === 2 ? '36.5':
                  index === 3 ? '37.5':
                  index === 4 ? '38':
                  index === 5 ? '38.5':
                  index === 6 ? '39':
                  index === 7 ? '40':
                  index === 8 ? '40.5':
                  index === 9 ? '41':
                  index === 10 ? '42':
                  index === 11 ? '42.5':
                  index === 12 ? '43':
                  index === 13 ? '44':
                  index === 14 ? '44.5':
                  index === 15 ? '45':
                  index === 16 ? '45.5':
                  index === 17 ? '46':
                  index === 18 ? '47':
                  index === 19 ? '47.5':
                  index === 20 ? '48':
                  index === 21 ? '47':
                  index === 22 ? '48.5':
                  index === 23 ? '49.5':
                  index === 24 ? '50.5':
                  index === 25 ? '51.5':  `Row ${index} Column 2`,
        
        column3:  index === 0 ? '3' : 
                  index === 1 ? '3.5': 
                  index === 2 ? '4':
                  index === 3 ? '4.5':
                  index === 4 ? '5':
                  index === 5 ? '5.5':
                  index === 6 ? '6':
                  index === 7 ? '6':
                  index === 8 ? '6.5':
                  index === 9 ? '7':
                  index === 10 ? '7.5':
                  index === 11 ? '8':
                  index === 12 ? '8.5':
                  index === 13 ? '9':
                  index === 14 ? '9.5':
                  index === 15 ? '10':
                  index === 16 ? '10.5':
                  index === 17 ? '11':
                  index === 18 ? '11.5':
                  index === 19 ? '12':
                  index === 20 ? '12.5':
                  index === 21 ? '13':
                  index === 22 ? '14':
                  index === 23 ? '15':
                  index === 24 ? '16':
                  index === 25 ? '17':  `Row ${index} Column 3`,
        
          column4:  index === 0 ? '3.5' : 
                    index === 1 ? '4': 
                    index === 2 ? '4.5':
                    index === 3 ? '5':
                    index === 4 ? '5.5':
                    index === 5 ? '6':
                    index === 6 ? '6.5':
                    index === 7 ? '7':
                    index === 8 ? '7.5':
                    index === 9 ? '8':
                    index === 10? '8.5':
                    index ===11?   "9":
                    index ===12?   "9.5":
                    index ===13?   "10":
                    index ===14?   "10.5":
                    index ===15?   "11":
                    index ===16?   "11.5":
                    index ===17?   "12":
                    index ===18?   "12.5":
                    index ===19?   "13":
                    index ===20?   "13.5":
                    index ===21?   "14":
                    index ===22?   "15":
                    index ===23?   "16": 
                    index ===24?   "17": 
                    index ===25?   "18": `Row ${index} Column 4`,
      }));

      const data3 = Array.from({ length: 15 }, (_, index) => ({
        key: index,
        column1:  index === 0 ? '22' : 
                  index === 1 ? '22.4': 
                  index === 2 ? '22.9':
                  index === 3 ? '23.3':
                  index === 4 ? '23.7':
                  index === 5 ? '24.1':
                  index === 6 ? '24.5':
                  index === 7 ? '25':
                  index === 8 ? '25.4':
                  index === 9 ? '25.8':
                  index ===10?   "26.2":
                  index ===11?   "26.7":
                  index ===12?   "27.1":
                  index ===13?   "27.5":
                  index ===14?   "27.9": `Row ${index} Column 1`,
    
          column2:
                  index === 0 ? '35.5' : 
                  index === 1 ? '36': 
                  index === 2 ? '36.5':
                  index === 3 ? '37.5':
                  index === 4 ? '38':
                  index === 5 ? '38.5':
                  index === 6 ? '39':
                  index === 7 ? '40':
                  index === 8 ? '40.5':
                  index === 9 ? '41':
                  index ===10?   "42":
                  index ===11?   "42.5":
                  index ===12?   "43":
                  index ===13?   "44":
                  index ===14?   "44.5": `Row ${index} Column 2`,
        
        column3: 
                  index === 0 ? '2.5' : 
                  index === 1 ? '3': 
                  index === 2 ? '3.5':
                  index === 3 ? '4':
                  index === 4 ? '4.5':
                  index === 5 ? '5':
                  index === 6 ? '5.5':
                  index === 7 ? '6':
                  index === 8 ? '6.5':
                  index === 9 ? '7':
                  index === 10 ? '7.5':
                  index === 11 ? '8':
                  index === 12 ? '8.5':
                  index === 13 ? '9':
                  index === 14 ? '9.5': `Row ${index} Column 3`,
        
        column4:  index === 0 ? '5' : 
                  index === 1 ? '5.5': 
                  index === 2 ? '6':
                  index === 3 ? '6.5':
                  index === 4 ? '7':
                  index === 5 ? '7.5':
                  index === 6 ? '8':
                  index === 7 ? '8.5':
                  index === 8 ? '9':
                  index === 9 ? '9.5':
                  index ===10?   "10":
                  index ===11?   "10.5":
                  index ===12?   "11":
                  index ===13?   "11.5":
                  index ===14?   "12": `Row ${index} Column 4`,
      }));
      
      const data4 = Array.from({ length: 15 }, (_, index) => ({
        key: index,
        column1:  index === 0 ? '8 5/8' : 
                  index === 1 ? '8 7/8': 
                  index === 2 ? '9':
                  index === 3 ? '9 1/8':
                  index === 4 ? '9 3/8':
                  index === 5 ? '9 1/2':
                  index === 6 ? '9 5/8':
                  index === 7 ? '9 7/8':
                  index === 8 ? '10':
                  index === 9 ? '10 1/8':
                  index ===10?   '10 3/8':
                  index ===11?   '10 1/2':
                  index ===12?   '10 5/8':
                  index ===13?   '10 7/8':
                  index ===14?   '11': `Row ${index} Column 2`,
        column2:
                  index === 0 ? '35.5' : 
                  index === 1 ? '36': 
                  index === 2 ? '36.5':
                  index === 3 ? '37.5':
                  index === 4 ? '38':
                  index === 5 ? '38.5':
                  index === 6 ? '39':
                  index === 7 ? '40':
                  index === 8 ? '40.5':
                  index === 9 ? '41':
                  index ===10?   "42":
                  index ===11?   "42.5":
                  index ===12?   "43":
                  index ===13?   "44":
                  index ===14?   "44.5": `Row ${index} Column 2`,
        
        column3: 
                  index === 0 ? '2.5' : 
                  index === 1 ? '3': 
                  index === 2 ? '3.5':
                  index === 3 ? '4':
                  index === 4 ? '4.5':
                  index === 5 ? '5':
                  index === 6 ? '5.5':
                  index === 7 ? '6':
                  index === 8 ? '6.5':
                  index === 9 ? '7':
                  index === 10 ? '7.5':
                  index === 11 ? '8':
                  index === 12 ? '8.5':
                  index === 13 ? '9':
                  index === 14 ? '9.5': `Row ${index} Column 3`,
        
        column4:  index === 0 ? '5' : 
                  index === 1 ? '5.5': 
                  index === 2 ? '6':
                  index === 3 ? '6.5':
                  index === 4 ? '7':
                  index === 5 ? '7.5':
                  index === 6 ? '8':
                  index === 7 ? '8.5':
                  index === 8 ? '9':
                  index === 9 ? '9.5':
                  index ===10?   "10":
                  index ===11?   "10.5":
                  index ===12?   "11":
                  index ===13?   "11.5":
                  index ===14?   "12": `Row ${index} Column 4`,
      }));

    return (
    <div>
        <div className='title-size'>
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
