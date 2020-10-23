interface ISql {
    [index : string] : string;
}

const TSql = {} as ISql;
TSql['KtgFindAll'] = "select * from tbl_kategori;";
TSql['KtgFindByKode'] = "select * from tbl_kategori where kode = $1;";
TSql['KtgFindInKode'] = "select * from tbl_kategori where kode in($1, $2, $3);";
TSql['BlogInfoFindAll'] = "select * from tbl_bloginfo;";
TSql ['InsUser'] = "insert into tbl_user (username , fullname, paswd) values ($1, $2, MD5($3));";
export default TSql;