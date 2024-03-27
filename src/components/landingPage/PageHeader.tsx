interface PageHeaderProps {
    smallTitle?: String
    bigTitle: String
    styles?: {
        smallTitle?: Object
        bigTitle?: Object
    }
}

const PageHeader = ({ smallTitle, bigTitle, styles }: PageHeaderProps) => {
    return (
        <div className="w-full">
            {smallTitle && (
                <div
                    className="mb-3 tracking-[1px] text-sm w-full font-semibold"
                    style={styles?.smallTitle}
                >
                    {smallTitle}
                </div>
            )}
            <h4
                className="small-title text-4xl leading-[50px] mb-5 font-bold"
                style={styles?.bigTitle}
            >
                {bigTitle}
            </h4>
        </div>
    )
}

export default PageHeader
