import React from 'react'
import { Avatar, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { getDataAPI } from '../../functions/fetchData';

export default function CategoryList() {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        getDataAPI("categories", "")
            .then((res) => {
                console.log(res)
                setCategories(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const showCategories = () =>
        categories?.map((c) => (
            <Space key={c._id} direction='vertical' size={0}>
                <Link to={`category/${c.slug}`}>
                    <Avatar size={64} shape="square" src={c.image} />
                </Link>
                <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    <Link to={`/category/${c.slug}`}>{c.name}</Link>
                </div>
            </Space>
        ))

    return (
        <Row justify="space-between" style={{ padding: "0 32px" }}>
            {showCategories()}
        </Row>
    )
}
