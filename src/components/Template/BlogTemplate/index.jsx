"use client";
import React from 'react'
import { Container } from 'react-bootstrap'
import TopHeader from '@/components/atoms/TopHeader/TopHeader'
import classes from './BlogTemplate.module.css'
import { useEffect, useState } from 'react'
import useAxios from '@/interceptor/axios-functions'
import { blogTableHeader } from '@/developmentContent/tableData/tableHeader'
import { blogData } from '@/developmentContent/tableData/tableBody'
import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper'
import TableHeader from '@/components/molecules/TableHeader/TableHeader'
import ResponsiveTable from '@/components/organisms/ResponsiveTable/ResponsiveTable'
import PopOver from '@/components/molecules/PopOver'
import { faqEnum } from '@/developmentContent/enums/enums'
import { IoMdAddCircleOutline } from 'react-icons/io'
import AddorEditBlogModal from '@/components/molecules/Modal/AddorEditBlogModal'



const BlogTemplate = () => {

    const { Get, Post, Patch } = useAxios();


    const [search, setSearch] = useState('')
    const [data, setData] = useState(blogData)
    const [loading, setLoading] = useState('')
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("")
    const [totalRecords, setTotalRecords] = useState(0)
    const [showModal, setShowModal] = useState("")
    const [selectedData, setSelectedData] = useState(null)

    const faqPopoverOptions = [
        {
            label: 'Edit',
            value: 'edit',
        }
    ]

    const onClickPopover = (label, rowItem) => {
        if (label === 'edit') {
            setShowModal("edit");
            setSelectedData(rowItem);
        }
    }


    // API FUNCTION
    const getData = async ({
        _page = page,
        _search = search,
        _filter = filter,
    }) => {
        setLoading("getData");

        const params = {
            page: _page,
            limit: 10,
            search: _search,
            filter: _filter,
        };


        const queryParams = new URLSearchParams(params).toString();
        console.log("queryParams", queryParams);


        const { response } = await Get({
            route: `faq?${queryParams}`,
        });

        if (response) {
            setData(response?.data?.data);
            setTotalRecords(response?.data?.totalRecords);
            setPage(_page);
        }
        setLoading("");
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddClick = () => {
        setShowModal("add");
        setSelectedData(null);
    }

    return (
        <Container>
            <TopHeader title="Blog" backButton={false} btnlabel="Add Blog" onClick={handleAddClick} leftIcon={<IoMdAddCircleOutline size={22} color="#024757" />} />
            <ShadowWrapper>
                <TableHeader
                    onSearch={setSearch}
                    search={search}
                    options={faqEnum}
                />
                <ResponsiveTable
                    data={data}
                    tableHeader={blogTableHeader}
                    hasPagination={false}
                    loading={loading === "getData"}
                    renderItem={({ item, key, rowIndex, renderValue }) => {
                        const rowItem = data[rowIndex];

                        if (renderValue) {
                            return renderValue(item, rowItem);
                        }
                        console.log("rowItem", rowItem);



                        if (key === "actions") {
                            return (
                                <div className={classes.actionButtons}>
                                    <PopOver
                                        popover={faqPopoverOptions}
                                        onClick={(label) => {

                                            onClickPopover(label, rowItem);
                                        }}
                                    />
                                </div>
                            );
                        }

                        return item || "";
                    }}
                />
            </ShadowWrapper>
            {(showModal === "add" || showModal === "edit") && (
                <AddorEditBlogModal show={showModal} setShow={setShowModal} selectedData={selectedData} />
            )}
        </Container>
    )
}

export default BlogTemplate  