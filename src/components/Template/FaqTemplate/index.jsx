"use client";
import React from 'react'
import { Container } from 'react-bootstrap'
import TopHeader from '@/components/atoms/TopHeader/TopHeader'
import classes from './FaqTemplate.module.css'
import { useEffect, useState } from 'react'
import useAxios from '@/interceptor/axios-functions'
import { faqTableHeader } from '@/developmentContent/tableData/tableHeader'
import { faqData } from '@/developmentContent/tableData/tableBody'
import ShadowWrapper from '@/components/atoms/ShadowWrapper/ShadowWrapper'
import TableHeader from '@/components/molecules/TableHeader/TableHeader'
import ResponsiveTable from '@/components/organisms/ResponsiveTable/ResponsiveTable'
import PopOver from '@/components/molecules/PopOver'
import { faqEnum } from '@/developmentContent/enums/enums'
import AddorEditFaqModal from '@/components/molecules/Modal/AddorEditFaqModal'
import { IoMdAddCircleOutline } from 'react-icons/io'
import RenderToast from '@/components/atoms/RenderToast'
import AreYouSureModal from '@/components/molecules/Modal/AreYouSureModal';



const FAQTemplate = () => {

    const { Get, Post, Patch, Delete } = useAxios();


    const [search, setSearch] = useState('')
    const [data, setData] = useState(faqData)
    const [loading, setLoading] = useState('')
    const [page, setPage] = useState(1)
    const [totalRecords, setTotalRecords] = useState(0)
    const [showModal, setShowModal] = useState("")
    const [selectedData, setSelectedData] = useState(null)
    const [status, setStatus] = useState(faqEnum)

    const faqPopoverOptions = [
        {
            label: 'Edit',
            value: 'edit',
        },
        {
            label: 'Delete',
            value: 'delete',
        }
    ]

    const onClickPopover = (label, rowItem) => {
        if (label === 'edit') {
            setShowModal("edit");
            setSelectedData(rowItem);
        }
        if (label === 'delete') {
            setShowModal("delete");
            setSelectedData(rowItem);

        }
    }

    const handleDelete = async (rowItem) => {
        setLoading("delete");
        const { response } = await Delete({
            route: `admin/faq/delete/${slug}`,
        });

        if (response) {
            RenderToast({ type: "success", message: "FAQ deleted successfully" });
            getData({ page: page });
        }
        setLoading("");

    }


    // API FUNCTION
    const getData = async ({
        _page = page,
        _search = search,
        _status = status?.value || "",
        _limit = 5,
    }) => {
        setLoading("getData");

        const params = {
            page: _page,
            limit: _limit,
            search: _search,
            status: _status,
        };


        const queryParams = new URLSearchParams(params).toString();
        console.log("queryParams", queryParams);


        const { response } = await Get({
            route: `admin/faq/all?${queryParams}`,
        });

        if (response) {
            setData(response?.data);
            setTotalRecords(response?.totalRecords);
            setPage(_page);
        }
        setLoading("");
    };

    useEffect(() => {
        getData({ page: 1 });
    }, [status]);

    const handleAddClick = () => {
        setShowModal("add");
        setSelectedData(null);
    }

    return (
        <Container>
            <TopHeader title="FAQ" backButton={false} btnlabel="Add FAQ" onClick={handleAddClick} leftIcon={<IoMdAddCircleOutline size={22} color="#024757" />} />
            <ShadowWrapper>
                <TableHeader
                    onSearch={setSearch}
                    search={search}
                    options={faqEnum}
                    selectedOption={status}
                    setSelectedOption={(e) => { setStatus(e[0]) }}
                />
                <ResponsiveTable
                    data={data}
                    tableHeader={faqTableHeader}
                    hasPagination={true}
                    currentPage={page}
                    onPageChange={(page) => { setPage(page); getData({ _page: page }); }}
                    limit={5}
                    totalRecords={totalRecords}
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
                <AddorEditFaqModal show={showModal} setShow={setShowModal} selectedData={selectedData} getData={getData} />
            )}
            {showModal === "delete" && (
                <AreYouSureModal show={showModal} setShow={setShowModal} onSubmit={handleDelete} />
            )}
        </Container>
    )
}

export default FAQTemplate  